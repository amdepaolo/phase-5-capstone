# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding"

test_user = User.create(name: "test", email: "test@example.net", password: "testpassword")

test_game = Game.create(game_name: "testGame", host_id: test_user.id, game_end: DateTime.now.next_week)

test_player = Player.create(game_id: test_game.id, user_id: test_user.id)

test_question = Question.create(left_choice: "Have a kangaroo pouch", right_choice: "Have a turtle shell", game_id: test_game.id, user_id: test_user.id)

puts "Done seeding!"