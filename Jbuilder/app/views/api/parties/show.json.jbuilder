
# json.extract! @party, :name, :location,
 json.array! @guests do |guest|
    json.extract! guest, :name
end



# json.array! @guests do |guest|
#     json.extract! guest, :name
# end

