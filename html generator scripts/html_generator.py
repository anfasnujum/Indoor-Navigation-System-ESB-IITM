def button_list(file_name):
    f=open(file_name,'r+')
    l=file_name.find('.')
    f_html=open(file_name[0:l]+ ' button.txt','w+')
    for line in f:
        line=line.replace('\n','')
        button_prof="<button id='"+line+"' onclick=\"voice('"+line+"');\" ondbclick=\"gotoroom('"+line+"');\">"+line+"</button>\n <br>"
        print button_prof
        f_html.writelines(button_prof+'\n')


file_profs='Prof List.txt'
file_labs='Lab List.txt'
                
button_list(file_profs)
button_list(file_labs)

    
    
