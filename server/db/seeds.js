use brokerinsights;

db.dropDatabase();

db.clients.insertMany([
  {"client": {
    "name": "Achme Broker Ltd",
    "policies": [
      {
  			"customer_name": "ABC Joinery",
  			"customer_address": "12 Ascott Street, Dundee",
  			"premium": 123.87,
  			"policy_type": "Public Liability",
  			"insurer_name": "Aviva"
  		},
  		{
  			"customer_name": "XYZ Plumbing",
  			"customer_address": "24 Fleet Street, Glasgow",
  			"premium": 2321.45,
  			"policy_type": "Public Liability",
  			"insurer_name": "Allianz"
  		},
  		{
  			"customer_name": "Fast Taxis",
  			"customer_address": "324b Bank Street, Aberdeen",
  			"premium": 59897.00,
  			"policy_type": "Motor Fleet",
  			"insurer_name": "Aviva"
  		},
  		{
  			"customer_name": "Fast Taxis",
  		 	"customer_address": "324b Bank Street, Aberdeen",
  			"policy_type": "Public Liability",
  		    	"premium": 6845.00,
  			"insurer_name": "QBE"
		  }
    ]
  }}
]);
