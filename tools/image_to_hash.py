#!/usr/bin/env python
import sys
from math import floor
from PIL import Image, ImageOps

def image_to_hash( path_to_image ):
    """takes an image and returns its hash"""

    encStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    size = 18, 14
    #size = 24, 16

    bw = Image.open( path_to_image ) 
    bw = bw.convert('L')
    bw = ImageOps.equalize(bw)
    bw = bw.point(lambda x: 0 if x<128 else 255, '1')
    bw = ImageOps.fit(bw, size, Image.ANTIALIAS)
    bw.save( "smally.jpg", "JPEG")

    pixels = bw.load()

    matrix = []
    for row in range(size[1]):
        vector = []
        for col in range(size[0]):
            color = pixels[col, row]
            if color == 255:
                color = 1
            vector.append( color )
        matrix.append( vector )

    imHash = ""
    imHash += encStr[ int( size[0] / 6 ) ]
    for row in matrix:
        symbols = [ row[i:i + 6] for i in range(0, size[0], 6) ]
        for symbol in symbols:
            bin = "".join( str(x) for x in symbol )
            number = int( bin, 2 )
            char = encStr[ number ]
            imHash += char
    return imHash

if __name__ == "__main__":
    if len(sys.argv) == 2:
        image_file = sys.argv[1]

        imHash = image_to_hash( image_file )
        print imHash
