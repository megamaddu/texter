'use strict'

$(function () {

  $('form.texter').on('submit', function (event) {
    event.preventDefault()
    var toField = $('input[name=to]', this)
    var messageField = $('input[name=message]', this)
    var to = toField.val()
    var message = messageField.val()

    if (!to || !message) {
      alert('All fields are required!')
      return
    }

    $.ajax({
      url: '/send-text/' + encodeURIComponent(to),
      type: 'POST',
      data: JSON.stringify({message: message}),
      contentType: 'application/json',
      success: function () {
        messageField.val('')
      }
    })

  })

})
