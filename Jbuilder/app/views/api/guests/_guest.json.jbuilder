
    
# json.set! guest.id do
    json.extract! guest, :name, :age, :favorite_color
        # json.gifts do 
        #     gifts.each do |gift|
        #         json.set! gift.id do
        #             json.extract! gift, :title, :description
        #         end
        #     end
        # end
# end
