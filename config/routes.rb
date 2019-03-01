Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :show, :index] do 
      resources :bookings, only: [:create]
      resources :photos, only: [:create]
    end
    resources :bookings, only: [:update, :destroy, :index]
    resources :reviews, only: [:create, :update]

  end
end
