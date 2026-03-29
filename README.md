# US -> UK Crochet Pattern converter

This tool converts US crochet terms into UK crochet terms. This is a prototype tool in very early stages of development and there are plans for many features to be added. See the product roadmap below for further information. If you would like to make a suggestion you don't see listed, feel free to reach out.


## How it works: 
Give the tool a PDF file
The tool scans the file for common US terms, and replaces them with the UK equivalents. Please see below for a list of terms will be replaced.
Once the tool has verified that any US terms have been detected and replaced, it will create a new downloadable PDF with the UK terms.

Please note: in this early stage of development, the tool will only work in a Ubuntu CLI.

## Terminology: 

When found in the file, the following terms will be replaced 

Standard stitch names
| US term | US term shortform | UK term | UK term shortform
| --- | --- | --- | --- 
|  single crochet  | sc  | double crochet  | dc
|  half double crochet | hdc  | half treble crochet | htr
|  double crochet | dc  | treble crochet | tr
|  treble crochet | trc  | double treble crochet  | dtr
|  double treble crochet | dtr  | triple treble  | ttr

## Product Roadmap
### MVC (current) 
* Limited terminology supported, US -> UK conversion
* Limited file format 
* Tool assumes pattern is US 
* CLI tool for Ubuntu only 

### V1 
* Tool outputs a PDF pattern in alternative variation 
    * checks for US terminology and converts to UK terminology if found, converts to US terminology if UK terminology is found
* Expanded terminology supported (color -> colour, gauge -> tension) 

### V2
Accept all text file types
User select output file type (can input a PDF and have a .txt file as output) 
User can select what variation the pattern is at point of input, so tool doesn't have to run logic to determine this - reduces margins of logic being wrong
All varying terms (needle sizes, yarn weights) converted

### V3 
Add a UI to make app more user friendly and OS agnostic

### Further Improvements
* Idea: Accepts a photo of a pattern (e.g patterns from a book can be converted) 
* Idea: Add a text box. Users can type in what they'd like to have converted, and tool runs on converting the input, printing that below the text field
## Other suggestions are welcome!  


