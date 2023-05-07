# frozen_string_literal: true

class Users::InvitationsController < Devise::InvitationsController
  respond_to :json

  def edit
    redirect_to "/invitation/accept?invitation_token=#{params[:invitation_token]}"
  end

  def update
    @user = User.accept_invitation!(accept_invitation_params)
    if @user.errors.empty?
      render json: {
        status: { code: 200, message: "Signed up sucessfully." },
        data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
      }
    else
      render json: {
        status: { message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}" }
      }, status: :unprocessable_entity
    end
  end

  private

    def accept_invitation_params
      params.permit(:invitation_token, :password, :password_confirmation)
    end
end
