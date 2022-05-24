from flask import Flask,request
import main as skroutzapi

app = Flask(__name__)

"""

    To-do: Implement a way to limit ?s to category specific, e:g specificS?=arg|cat => cat > arg
    instead of s?=arg => all > arg

"""



@app.route("/api", methods=["POST", "GET"])
def result():
    # Initialize response dictionary
    res = {
        "Status": "BAD Request - Could Not Send Request!",
        "Url": None,
        "Data": None,
    }

    # Attempt to retrieve query arguments
    try:
        args = request.args
        url = args["url"]
        res["Url"] = url
        res["Status"] = "INCOMPLETE Request"
    except:
        pass
    
    # Handle if query is from search feature
    if "s" in args:
        try:
            res["Data"] = skroutzapi.call(f"https://www.skroutz.gr/search?keyphrase={args['s']}", category=True)
            res["Status"] = "OK"
        except Exception as exception:
            res["Status"] = "BAD Response - Server Error Occurred While Fulfilling The Search Request"
        return res
    
    # If query arguments have been retrieved, call the skroutzpseudoapi
    if res["Url"] is not None:
        result = dict()
        if "data" in args:
            flag = args["data"].split(":")
        else:
            flag = ["all"]

        show_flag = "show_all" in args and args["show_all"].lower() == "true"
        limit_flag = "limit" in args
        limit = 32 if not limit_flag else int(args["limit"])
        is_category = "category" in args and args["category"].lower() == "true"
        if is_category:
            try:
                result = skroutzapi.call(res["Url"], category=True, data=flag)
            except:
                res["Status"] = "BAD Response - Please Make Sure You've Passed A Skroutz.gr URL That Exists!"
        else:
            try:
                result = skroutzapi.call(res["Url"], show_all=show_flag, limit=limit, data=flag)
            except:
                res["Status"] = "BAD Response - Please Make Sure You've Passed A Skroutz.gr URL That Exists!"
        if not result:
            try:
                result = skroutzapi.call(res["Url"], data=flag)
            except Exception as exception:
                res["Status"] = "BAD Response - Please Make Sure You've Passed A Skroutz.gr URL That Exists!"

        if result:
            res["Status"] = "OK"
   
        res["Data"] = result
    return res

if __name__ == '__main__':
    app.run(debug=True,port=8192)
