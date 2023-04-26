Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  get '/doathing', to: 'application#doathing'
  
  get '/me', to: 'users#show'
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'
  resources :users, only: [:create, :update, :destroy]
  resources :games, only: [:index, :show, :create] do
    resources :players, only: [:create, :destroy]
    resources :questions, only: [:create] do 
      put "/vote", to: 'questions#vote'
      patch "/vote", to: 'questions#vote'
    end
  end
end
