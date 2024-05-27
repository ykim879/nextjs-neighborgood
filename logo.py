from PIL import Image
import numpy as np
import svgwrite

# Correct file path
image_path = '/mnt/data/Create_a_logo_for_an_app_called_Taking_Care_of_Yo.png'
image = Image.open(image_path)

# Convert image to RGBA if it is not already
if image.mode != 'RGBA':
    image = image.convert('RGBA')

# Convert the image to numpy array
data = np.array(image)

# Mask the non-transparent areas
mask = data[:, :, 3] > 0

# Find the bounding box of the non-transparent areas
coords = np.argwhere(mask)
y0, x0 = coords.min(axis=0)
y1, x1 = coords.max(axis=0) + 1  # slices are exclusive at the top

# Crop the image to the bounding box
cropped_data = data[y0:y1, x0:x1]

# Create a new image from the cropped data
cropped_image = Image.fromarray(cropped_data, mode='RGBA')

# Save the cropped image as PNG
cropped_image_path = '/mnt/data/cropped_logo.png'
cropped_image.save(cropped_image_path)

# Convert the cropped image to grayscale
gray_image = cropped_image.convert('L')

# Convert the grayscale image to a numpy array
bitmap = np.array(gray_image)

# Create an SVG drawing
dwg = svgwrite.Drawing('/mnt/data/cropped_logo.svg', profile='tiny')

# Add the image to the SVG drawing
dwg.add(dwg.image(cropped_image_path, insert=(0, 0), size=(bitmap.shape[1], bitmap.shape[0])))

# Save the SVG file
dwg.save()
