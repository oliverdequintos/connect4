Rails.application.routes.draw do
  get 'boards/index'
  root to: 'boards#index'
end
