Rails.application.routes.draw do

  mount ActionCable.server => '/cable'
  
  get '/me', to: 'users#show'
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'
  resources :users, only: [:create, :update, :destroy]
  resources :games, only: [:index, :show, :create, :destroy] do
    resources :players, only: [:create, :update, :destroy]
    resources :questions, only: [:create] do 
      put "/vote", to: 'questions#vote'
      patch "/vote", to: 'questions#vote'
    end
  end
end
