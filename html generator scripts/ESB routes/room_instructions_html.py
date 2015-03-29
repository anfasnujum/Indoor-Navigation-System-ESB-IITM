from os import listdir
from os.path import isfile, join
import webbrowser

def filenames(mypath):
    onlyfiles = [ f for f in listdir(mypath) if isfile(join(mypath,f)) ]
    return onlyfiles

mypath="C:/Users/Toshiba/Desktop/vishal iit/6th sem/Design of assistive devices/Indoor Navigation System/python scripts/esb routes/"
files=filenames(mypath)

for i in files:
    file_name=i[0:-4]
    room_no=file_name[3:]
    Title=file_name
    f_read=open(i,'r+')
    f=open(file_name+'.html','w+')

    initial_html="""<!DOCTYPE HTML>
    <html>
    <head>
    <link type="text/css" rel="stylesheet" href="../css/styles.css"/>
    <script type="text/javascript" src="../js/script.js"></script>
    <meta charset="utf-8">
    </head>
    <body>
    <h1>"""+Title+"""
    </h1>
    <div>
    """
    f.write(initial_html)
    for content in f_read:
        content=content.replace('\n','')
        inp="""<button onclick="voice_content('"""+content+"""');">"""+content+"""</button> \n <br> \n <br>"""
        f.writelines(inp)
    
    closing_html="""
    </div>
    </body>
    </html>
    """
    f.write(closing_html)
    f.close()



    
