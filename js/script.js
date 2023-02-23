$("#contactMe").submit(function (event) {
  event.preventDefault();
  $("#submitBtn").attr("disabled", true)

  let posting = {
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#message").val(),
  };

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify(posting);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch("http://127.0.0.1:3333/api/v1/emails", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      $('#contactMe').trigger("reset");
      if (result.success) $("#successMessage").removeClass('d-none');
      $("#submitBtn").attr("disabled", false)
    })
    .catch((error) => console.log("error", error));
});
