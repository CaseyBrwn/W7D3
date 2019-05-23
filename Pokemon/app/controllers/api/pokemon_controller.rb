class Api::PokemonController < ApplicationController
    def index
        @pokemon = Pokemon.all
        render :index
    end


    def show
        @pokemon = Pokemon.find_by(id: params[:id] )
        @items = @pokemon.items 
        render :show  
    end


    def create
        @pokemon = Pokemon.new(pokemon_params)
        debugger
        if @pokemon.save
            render :new
        else
            render json: @pokemon.errors.full_messages, status: 422
        end

            
    end


    private

    def pokemon_params
        params.require(pokemon).include(:name, :attack, :defense, :poke_type, :moves, :img_url)
    end

end