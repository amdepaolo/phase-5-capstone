Rails.application.routes.draw do
  get '/me', to: 'users#show'
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'
end
