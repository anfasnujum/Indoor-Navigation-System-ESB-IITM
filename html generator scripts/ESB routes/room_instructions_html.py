from os import listdir
from os.path import isfile, join
import webbrowser

def filenames(mypath):
    onlyfiles = [ f for f in listdir(mypath) if isfile(join(mypath,f)) ]
    return onlyfiles

mypath=""
files=filenames(mypath)

for i in files:
    file_name=i[0:6]
    room_no=file_name=[3:6]
    Title="ESB "+room_no
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
    for content in i:
        inp="""<button onclick="voice('"""+content+"""');">"""+content+"""</button>"""
        f.writelines(inp+'\n')
    
    closing_html="""
    </div>
    </body>
    </html>
    """
    f.write(closing_html)
    f.close()



    
