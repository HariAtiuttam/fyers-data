
// Import required modules
import { fyersModel } from "fyers-api-v3";

// Create a new instance of fyersModel
const fyers = new fyersModel();

// Set your APPID obtained from Fyers (replace "xxx-1xx" with your actual APPID)
fyers.setAppId("0UPH2OH865-100");

// Set the RedirectURL where the authorization code will be sent after the user grants access
// Make sure your redirectURL matches with your server URL and port
fyers.setRedirectUrl(`https://vishwajeetatiuttam.github.io/testing/`);

// Generate the URL to initiate the OAuth2 authentication process and get the authorization code
//var generateAuthcodeURL = fyers.generateAuthCode();

// console.log(generateAuthcodeURL)
const auth_code = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE3MTc5MTk3NjMsImV4cCI6MTcxNzk0OTc2MywibmJmIjoxNzE3OTE5MTYzLCJhdWQiOiJbXCJkOjFcIiwgXCJkOjJcIl0iLCJzdWIiOiJhdXRoX2NvZGUiLCJkaXNwbGF5X25hbWUiOiJYSDA2MjEyIiwib21zIjoiSzEiLCJoc21fa2V5IjoiZTRmZTMyMDYxYjdiYjMyNjMwZTJhYzRhZjQxZmZmMjZiOTVjNjI0MWYzYmE0ODZhYzZhYmQ2NmIiLCJub25jZSI6IiIsImFwcF9pZCI6IjBVUEgyT0g4NjUiLCJ1dWlkIjoiZTU5Mjk1ZWYwODZlNDkwM2IxOTdkNGM0MmUxYTY2ODAiLCJpcEFkZHIiOiIwLjAuMC4wIiwic2NvcGUiOiIifQ.RAGpZ7wI9eQLslbrblZTZV9YoZk9fkXqewPccmPB7oo"

const secretKey = "JUZSZO3MWS"; // Replace with your secret key provided by Fyers

// fyers.generate_access_token({ "secret_key": secretKey, "auth_code": auth_code }).then((response) => {
//   console.log(response)
// }).catch((error) => {
//   console.log(error)
// })




 fyers.setAccessToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE3MTc5MTk4MjUsImV4cCI6MTcxNzk3OTQwNSwibmJmIjoxNzE3OTE5ODI1LCJhdWQiOlsiZDoxIiwiZDoyIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbVpXQlItWHYwNlZqX1FDTVZWVDZXUnBvckN6clY4cTd2THczdENnbDQ0WTlOUjBSeTQtc0xPQ3Foa1JRaW53SnlfcGpGaEh2WGlwUHItZUM4OUxmaDhiTVZhY1NHYTVoRjM4S21FRjVoMXB2Z3ZSRT0iLCJkaXNwbGF5X25hbWUiOiJIQVJTSElUIFNBSU5JIiwib21zIjoiSzEiLCJoc21fa2V5IjoiZTRmZTMyMDYxYjdiYjMyNjMwZTJhYzRhZjQxZmZmMjZiOTVjNjI0MWYzYmE0ODZhYzZhYmQ2NmIiLCJmeV9pZCI6IlhIMDYyMTIiLCJhcHBUeXBlIjoxMDAsInBvYV9mbGFnIjoiTiJ9.de1v8wKj7WVx8Mmu84LZVxJZaF_VK3cQUR1rulYJRMU')

 var inp={
  "symbol":"NSE:SBIN-EQ",
  "resolution":"D",
  "date_format":"0",
  "range_from":"1690895316",
  "range_to":"1691068173",
  "cont_flag":"1"
}

fyers.getHistory(inp).then((response)=>{
  console.log(response)
}).catch((err)=>{
  console.log(err)
})

// fyers.market_status().then((response) => {
//   console.log(response)
// }).catch((error) => {
//   console.log(error)
// })