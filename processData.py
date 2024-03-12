def handler(dataToProcess):
    if len(dataToProcess)==0:
        return []
    data = get_data(dataToProcess)
    return process_data(data)

# Function to get data
def get_data(inputData):
    result = inputData
    return result
# Function to process data
def process_data(data):
    newDataList = []
    for processedData in data:
        proccesedItem = {}
        proccesedItem["name"] = processedData["CompanyName"]
        proccesedItem["data.offered_solutions"] = processedData["Solutions"]
        newDataList.append(proccesedItem)
    return newDataList
