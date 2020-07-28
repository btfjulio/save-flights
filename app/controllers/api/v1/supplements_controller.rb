# frozen_string_literal: true

module Api
  module V1
    class SupplementsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        supplements = Supplement.all
        render json: SupplementSerializer.new(supplements, options).serialized_json
      end

      def show
        supplement = Supplement.find_by(slug: params[:slug])

        render json: SupplementSerializer.new(supplement, options).serialized_json
      end

      def create
        supplement = Supplement.new(supplement_params)
        if supplement.save
          render json: SupplementSerializer.new(supplement, options).serialized_json
        else
          render json: { errors: supplement.errors.messages }, status: 422
        end
      end

      def update
        supplement = Supplement.find_by(slug: params[:slug])
        if supplement.update(supplement_params)
          render json: SupplementSerializer.new(supplement).serialized_json
        else
          render json: { errors: supplement.errors.messages }, status: 422
        end
      end

      def destroy
        supplement = Supplement.find_by(slug: params[:slug])
        if supplement.destroy
          head :no_content
        else
          render json: { errors: supplement.errors.messages }, status: 422
        end
      end

      private

      def supplements_params
        require(:supplement).permit(:name, :image_url)
      end

      def options
        @options ||= { include: [:reviews] }
      end
    end
  end
end
