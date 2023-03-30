curl -XPOST localhost:3000/addresses -d '{"name": "Whole Foods", "street": "100 Van Ness Avenue", "city": "San Francisco"}'
curl -XGET localhost:3000/addresses

curl -XPOST localhost:3000/drivers -d '{"name": "John"}'
curl -XGET localhost:3000/drivers
