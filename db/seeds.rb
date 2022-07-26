# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Removing old data"
Strain.delete_all
User.delete_all
Review.delete_all

puts "Seeding users..."

User.create(first_name: "Demo User", last_name: "test", username: "demo1", email: "test@mail.com", password: "1234", password_confirmation: "1234")




puts "Creating Item"

#hybrid 
Strain.create(strain_name: "Wedding Cake", image: "https://leafly-public.imgix.net/strains/photos/m2y50HYRBu0dHY4JSdSx_wedding-cake_jman.jpg", description: "Wedding cake is a potent type of indica-hybrid marijuana strain made by crossing Triangle Kush with Animal Mints. Wedding Cake strain provides relaxing and euphoric effects that calm the body and mind.", flower_type: "Hybrid")

Strain.create(strain_name: "GG4 4 YAX", image: "https://images.leafly.com/flower-images/gg-4.jpg", description: "Gorilla Glue #4 is a potent hybrid marijuana strain that delivers heavy-handed euphoria and relaxation, leaving you feeling glued to the couch.", flower_type: "Hybrid")

Strain.create(strain_name: "Snowden Runtz", image: "https://highyields.com/wp-content/uploads/2021/10/runtz.jpg", description: "Runtz is made by Cookies Fam by crossing  Zkittlez with Gelato and it is loved for its incredibly fruity flavor profile that smells just like a bag of the sugary candy we all know and love.", flower_type: "Hybrid")

Strain.create(strain_name: "Dosidos", image: "https://leafly-public.imgix.net/strains/reviews/photos/do-si-dos__primary_d9be.jpg", description: "Similar to its parent, OGKB, a GSC-phenotype. With glittering trichomes, bright pistils, and lime green and lavender leaves, Dosidos weed is a feast for the eyes. Its aroma is pungent, sweet, and earthy with slight floral funkiness. These classic OG aromas blend nicely with medical-grade body effects that lean toward the sedative side with the addition of Face Off OG genetics.", flower_type: "Hybrid")



#indica
Strain.create(strain_name: "Ice Cream Cake", image: "https://images.leafly.com/flower-images/defaults/purple/strain-19.png", description: "This strain offers sedating effects that leave your mind and body completely relaxed. Ice Cream Cake features a creamy flavor profile with sweet hints of vanilla and sugary dough. This strain is reported by medical marijuana patients and consumers to have calming effects that help with pain, sleep, and anxiety.", flower_type: "Indica")

Strain.create(strain_name: "Slurricane", image: "https://images.leafly.com/flower-images/defaults/purple/strain-23.png", description: "Indica marijuana strain made by crossing Do-Si-Dos with Purple Punch. Slurricane produces relaxing effects that come on slowly.", flower_type: "Indica")

Strain.create(strain_name: "Kosher Kush", image: "https://leafly-public.imgix.net/strains/reviews/photos/kosher-kush__primary_d1d6.jpg", description: "Known as one of the most odiferous OG Kush-related strains, it has a unique yet familiar smell reminiscent of rich earth and fruit, and is considered by many to be one of the tastiest smokes around. The high experienced is typical of many heavy strains, producing pronounced relaxation and pain relief, with sleep often following close behind.", flower_type: "Indica")

Strain.create(strain_name: "Zkittlez", image: "https://leafly-public.imgix.net/strains/photos/HIhdYnYSQICmDZpoCnO1_Zkittlez.png", description: "This strain features chunky colas that explode in a spectrum of light green hues and emit a sweet, tropical blend of fruit flavors. The effects of Zkittlez are calming, leaving consumers focused, alert, and happy while relaxing the body to help unwind any time of day.", flower_type: "Indica")



#Sativa
Strain.create(strain_name: "Strawberry Lemonade", image: "https://images.hytiva.com/Strawberry-Lemonade-B90C.jpg?mw667-mh1000", description: "Strawberry Lemonade stays true to form, exhibiting tangy aromas and flavors coupled with a heady onset and complementary body effects. Enjoy Strawberry Lemonade throughout the day, but don’t plan too far ahead as this strain can be whimsical and intensely relaxing.", flower_type: "Sativa")

Strain.create(strain_name: "French Cookies", image: "https://images.leafly.com/flower-images/defaults/purple/strain-8.png", description: "French Cookies features a creamy, cookie flavor with just a hint of spice. The aroma of this strain smells like a classic cookies strain, which you'll recognize immediately upon opening your haul. French Cookies has minty green and purple nugs that are covered in trichomes.", flower_type: "Sativa")

Strain.create(strain_name: "Durban Poison", image: "https://images.hytiva.com/Durban-Poison.jpg?mw667-mh1000", description: "Durban Poison is the perfect strain to help you stay productive through a busy day, when exploring the outdoors, or to lend a spark of creativity. Growers and concentrate enthusiasts will both enjoy the over-sized resin glands which make this strain a quality choice for concentrate extraction.", flower_type: "Sativa")

Strain.create(strain_name: "Lemon Meringue", image: "https://images.hytiva.com/Lemon-Meringue.jpg?mw667-mh1000", description: "Lemon Meringue effects offer uplifting and invigorating energy that encourages physical activity. This strain’s subtle motivational qualities and pleasant euphoria make it a go-to for folks combating fatigue, depression, and minor headaches.", flower_type: "Sativa")




puts "Creating Reviews"

 Review.create(description: "My all time favorite strain hands down. It's fast acting cerebral effect is amazing because it's always the sweet spot. I use it day and/or night and I have no problem doing activities. I use it for my anxiety and stress. Don't judge by the High THC low CBD ratio. This strain is fantastic if you want to relax.", strain_id: 1, user_id: 1)

 Review.create(description: "Why is marijuana against the law? It grows naturally upon our planet.", strain_id: 2, user_id: 1)

 Review.create(description: "It is beautiful to look at, smell, and treats you even better. A dominant strain, this will make you smile and lose track of time and pain while lifting your body.", strain_id: 3, user_id: 1)

 Review.create(description: "I first started using marijuana to help me get a good rest for work because I get insomnia from depression and generally a very active imagination. This strain is the best I had for sleep. It drifts me off into a meditative, peaceful and relaxed state. You don't even need to use a lot.", strain_id: 4, user_id: 1)
 
 Review.create(description: "Provides energy but removes anxiety and lets you relax your nerves and lower your inhibitions at the same time that it heightens sensations. Made me more mindful and improved focus.", strain_id: 5, user_id: 1)

 Review.create(description: "Uplifting, this strain would be great during the day when you're awake and motivated to get stuff done, great for energy.", strain_id: 6, user_id: 1)

 Review.create(description: "Felt positive, talkative, tasted tropical notes and dulled my nausea symptoms. Can be great for PTSD, anxiety, and aiding in the creative process.", strain_id: 7, user_id: 1)

 Review.create(description: "My all time favorite strain hands down. It's fast acting cerebral effect is amazing because it's always the sweet spot. I use it day and/or night and I have no problem doing activities. I use it for my anxiety and stress. Don't judge by the High THC low CBD ratio. This strain is fantastic if you want to relax.", strain_id: 8, user_id: 1)

 Review.create(description: "If I could keep one strain in my medicine cabinet, this would be it. Regardless of where my tolerance is, I find fantastic relief from pain (migraines, spine/disc, & nerve pain), nausea and a variety of other chronic symptoms due to dysautonomia.", strain_id: 9, user_id: 1)

 Review.create(description: "This weed is bussin", strain_id: 10, user_id: 1)



puts "DONE"