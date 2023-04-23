# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding"

test_user = User.create(name: "test", email: "test@example.net", password: "testpassword")
other_user = User.create(name: "friend", email: "example@example.net", password: "testpassword")

test_game = Game.create(game_name: "testGame", host_id: test_user.id, game_end: DateTime.now + 7)
other_game = Game.create(game_name: "Your friends game", host_id: other_user.id, game_end: DateTime.now + 7)

test_player = Player.create(game_id: test_game.id, user_id: test_user.id)
other_player = Player.create(game_id: other_game.id, user_id: other_user.id)

test_question = Question.create(left_choice: "Have a kangaroo pouch", right_choice: "Have a turtle shell", game_id: test_game.id, user_id: test_user.id)
other_question = Question.create(left_choice: "Have a pizza as big as a house!", right_choice: "Have a mountain of french fries!", game_id: other_game.id, user_id: other_user.id)

puts "Done seeding!"