from processData import handler

data1 = [{ "CompanyName": "Grip", "Solutions": ["Event matchmaking", "Lead generation"]}]
data2 = [{ "CompanyName": "Google", "Solutions": ["Search Engine", "Video Streaming"]}]
data3 = [{ "CompanyName": "Amazon", "Solutions": ["Cloud Computing", "Shopping"]}]
data4 = [{ "CompanyName": "IBM", "Solutions": ["AI Consulting", "Software Development"]}]
data5 = [{ "CompanyName": "Oracle", "Solutions": ["Database Development", "Software Management"]}]
data6 = []



def test_checkDataProcessed1():
    assert handler(data1)==[{'name': 'Grip', 'data.offered_solutions': ['Event matchmaking', 'Lead generation']}]

def test_checkDataProcessed2():
    assert handler(data2)==[{'name': 'Google', 'data.offered_solutions': ['Search Engine', 'Video Streaming']}]

def test_checkDataProcessed3():
    assert handler(data3)==[{'name': 'Amazon', 'data.offered_solutions': ['Cloud Computing', 'Shopping']}]

def test_checkDataProcessed4():
    assert handler(data4)==[{'name': 'IBM', 'data.offered_solutions': ['AI Consulting', 'Software Development']}]

def test_checkDataProcessed5():
    assert handler(data5)==[{'name': 'Oracle', 'data.offered_solutions': ['Database Development', 'Software Management']}]

def test_checkDataProcessed6():
    assert handler(data6)==[]

