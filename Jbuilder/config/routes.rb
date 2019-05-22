Rails.application.routes.draw do

namespace :api, defaults: { format: :json } do
  
  resources :gifts, except: [:new, :edit, :index]
  resources :guests, except: [:new, :edit] do
    resources :gifts, only: [:index]
  end
  resources :parties, except: [:new, :edit]
end

end
