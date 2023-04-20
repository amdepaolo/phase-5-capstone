Rails.application.routes.draw do
  get '/me', to: 'users#show'
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'
  post '/users', to: 'users#create'

  resources :games, only: [:index, :show, :create] do
    resources :players, only: [:create, :destroy]
    resources :questions, only: [:create]
  end
end
