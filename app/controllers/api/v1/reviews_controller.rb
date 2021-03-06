# frozen_string_literal: true

module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :set_supplement, only: [:create]

      def create
        puts @supplement.name
        review = @supplement.reviews.new(review_params)

        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      def destroy
        review = Review.find_by(params[:id])
        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      private

      def review_params
        params.require(:review).permit(:title, :description, :score, :supplement_id)
      end

      def set_supplement
        @supplement = Supplement.find(params[:supplement_id])
      end
    end
  end
end
