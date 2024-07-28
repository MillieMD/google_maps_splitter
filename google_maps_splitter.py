import re

def url_check(url : str):

    """ Check the vital parts are in the string """

    # Bare Minimum:
    regex = "https:\/\/www\.google\.co\.uk\/maps\/@-?[0-9]?[0-9].[0-9]{7},-?[0-9]?[0-9].[0-9]{7},3a,75y,[0-9]?[0-9]?[0-9].?[0-9]?[0-9]?h,[0-9]?[0-9]?[0-9].?[0-9]?[0-9]?t"

    return re.search(regex, url)

def url_split(url : str):

    """ Split GoogleMaps URL into latitude, longitude, heading and pitch
        Returned as a tuple of strings, in stated order """

    if url_check(url) == None:

        print("Invalid URL - please paste full URL")
        
        return None

    data = url.split("/")[4].split(",")  # Fourth chunk contains the data we need, seperated by ","  

    lat = data[0][1:] # Remove @ at the beginning of latitude
    long = data[1]
    head = data[4][:-1] # Remove "h" from end of heading
    pitch = data[5][:-1] # Remove "t" from end of pitch

    return (lat, long, head, pitch)

print ("GMaps String Splitter (v1.0)")
print ("Enter \"CLOSE\" at any time to end program")

user_input = ""

while True:
    user_input = input("Paste *FULL* GMaps URL: ")

    while user_input == "":
        user_input = input("Paste *FULL* GMaps URL: ")

    if user_input == "CLOSE":
        quit()

    result = url_split(user_input)

    if result != None:
        
        print("Latitude:", result[0])
        print("Longitude:", result[1])
        print("Heading:", result[2])
        print("Pitch:", result[3])

    
    
