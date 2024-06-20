const DATA = [
  {
    id: 1,
    name: 'Breno Robert de Oliveira Ribeiro',
    phone: '12 1234-5678',
    email: 'user@123.com',
    photo:
      'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
    status: 'on',
    address: 'São José dos Campos, SP, 12000-001',
    birth: '01/01/2000',
  },
  {
    id: 2,
    name: 'Isadora Marciane Gusmão Leal',
    phone: '11 1234-5679',
    email: 'user@100.com',
    photo:
      'https://static.vecteezy.com/system/resources/previews/026/976/749/original/3d-icon-avatar-woman-illustration-of-smiling-happy-girl-cartoon-close-up-portrait-people-of-standing-teenager-on-isolated-on-transparent-background-generative-ai-png.png',
    status: 'off',
    address: 'São Paulo, SP, 11000-000',
    birth: '02/12/1993',
  },
  {
    id: 3,
    name: 'Melissa Rute Leon',
    phone: '39 1234-1110',
    email: 'user@999.com',
    photo:
      'https://static.vecteezy.com/system/resources/previews/026/976/749/original/3d-icon-avatar-woman-illustration-of-smiling-happy-girl-cartoon-close-up-portrait-people-of-standing-teenager-on-isolated-on-transparent-background-generative-ai-png.png',
    status: 'on',
    address: 'Fortaleza, PR, 37000-800',
    birth: '25/07/1987',
  },
  {
    id: 4,
    name: 'Sebastião Ederson Bezerra Dias',
    phone: '87 6732-5679',
    email: 'user@387.com',
    photo:
      'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
    status: 'off',
    address: 'Curitiba, SP, 11000-000',
    birth: '30/10/2005',
  },
];

function getContactDetails(obj) {
  $('#contact-name').html(obj.name);
  $('#contact-phone').html(obj.phone);
  $('#contact-email').html(obj.email);
  $('#contact-photo').attr('src', obj.photo);
  $('#contact-address').html(obj.address);
  $('#contact-birth').html(obj.birth);

  if (obj.status === 'on') {
    $('#contact-status')
      .html('Disponível')
      .removeClass('text-bg-danger')
      .addClass('text-bg-success');
  } else {
    $('#contact-status')
      .html('Indisponível')
      .removeClass('text-bg-success')
      .addClass('text-bg-danger');
  }

  if ($('#contact').hasClass('hide')) {
    $('#contact').slideToggle().removeClass('hide').addClass('show');
    $('#contacts-list').addClass('col-lg');
  }
}

function removeChecked() {
  $('#settings').prop('checked', false);
  if ($('#contact').hasClass('show')) {
    $('#contact').slideToggle().removeClass('show').addClass('hide');
    setTimeout(() => $('#contacts-list').removeClass('col-lg'), 350);
  }
}
