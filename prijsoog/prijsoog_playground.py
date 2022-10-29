# getting grocery price from AH and Jumbo via prijsoog lib
# https://github.com/PepijnBoers/prijsoog

import prijsoog, json

# Show Albert Heijn results containing "kiwi"
AH = prijsoog.AhWatcher()
products = AH.search("kiwi")
with open("prijsoog/albert_heijn.json", "w") as outfile:
    json.dump(products, outfile)


# Show Jumbo results containing "kiwi"
Jumbo = prijsoog.JumboWatcher()
products = Jumbo.search("kiwi")
with open("prijsoog/jumbo.json", "w") as outfile:
    json.dump(products, outfile)

# name parsing: 
# kiwi, kiwifruit, kiwi in other products

# unit parsing:
# per box, per kg, per liter