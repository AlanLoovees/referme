# frozen_string_literal: true

Rails.application.routes.draw do
  get "/current_user", to: "current_user#index"

  devise_for :users, path: "", path_names: {
    sign_in: "login",
    sign_out: "logout",
    registration: "signup"
  },
  controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }

  root "home#index"
  get "*path", to: "home#index", via: :all
end
