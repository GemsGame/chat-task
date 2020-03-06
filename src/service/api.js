const room_id = "4d6f0720-503e-4977-a8fd-37f5bb36f354";
const api_host = "104.248.82.179";
/*{
    "status": "ok",
    "data": {
        "user": {
            "id": "688019ee-e3e9-4497-8ae1-b10062856ca1",
            "name": "Test User 1",
            "email": "testuser1@4d6f0720-503e-4977-a8fd-37f5bb36f354"
        },
        "room": {
            "id": "4d6f0720-503e-4977-a8fd-37f5bb36f354"
        },
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzNlZDQ4ZjRjZDk5OGVjNmZmZmM1OWYwYTkzNDA5YWVhMTgyZTE3ODgyNjEzMjFhYTZjMDI2NGQ1OTE4NmJlNzU3MDVmODFkYjQ0ODlhNzQiLCJpYXQiOjE1ODM1MTM4OTQsIm5iZiI6MTU4MzUxMzg5NCwiZXhwIjoxNjE1MDQ5ODk0LCJzdWIiOiI2ODgwMTllZS1lM2U5LTQ0OTctOGFlMS1iMTAwNjI4NTZjYTEiLCJzY29wZXMiOltdfQ.fNNOFYcE6lgXendoS_p_L7mEsirxsGNj1_oe_biAM6c_tKuClQaNM-r83M4ap7CRDQ4A2DdbOk7pbSzLl378e6QbGhYlcZahJutIht4xDmNifkZ-MGO9UQz8zTDyf9psVgW6R88_k0pp3JYNcxR2lP0a235lUFsQwSMn1LpIqtiNofHSyU3HZ6T19OOtMG2doiKrE04LTNyESeVv9XPbyBxCcutz6rSF9BsVJSv4_1LpaHfUcM2RDv_w9durOKMgbvBa2H8gzQWVKi6_PO4mq1pqinom5TrSxaM4AhrAYd1PZyo_dC86s3Om9qgl2DP-ic_LiRuhe9e6V35GaZBWLHYdLKj4KrM91znYyEe3aQMd86wait7qVakuAAHvy0KML0GdbZFYkR2C8-brl24Fk7WhseW5EFnPUNjAHYvrhQc6gO_V8ExDoVkRz7vB6tlDcEtSHXkBER5npa5cEArIUyI8MdKfvd-gSKrSK6urN0boNscI7aqv_tyzALNMmfT33tnPk4UZlsNbAix_L-vEYEp7rVv6wKSzsHllbNEgNGIGxCpjVaG2a4xiH-fiJTtNn0abIOcnbhamyjCVahuagcJ-288Q5Vl0DwmFF29oZbWN9Zv_hiJubnqgK9hUOckY6SGkx1dt2b-PfvmiNiew2NYTFlghNA62hPpn1JigGu4"
    }
}*/ 
export const userRegistration = () => {
    fetch(`http://${api_host}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: {
            "name": "Test User 1",
            "email": "testuser1@4d6f0720-503e-4977-a8fd-37f5bb36f354",
            "password": "str0ngpassw0rd"
        }

}).then(result => result.json()).then(data => console.log(data))
.catch(error => console.log(error));
}

