Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :bookings, only: [:update, :index, :destroy]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :show, :index] do 
      resources :bookings, only: [:create]
      resources :photos, only: [:create]
    end
    resources :reviews, only: [:create]
    resources :bookings, only: [:update, :index]

  end
end
