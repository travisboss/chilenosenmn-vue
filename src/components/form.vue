<template>
  <section class="section" id="contact">
    <div class="column">
      <div class="section-heading">
        <h3 class="title is-2 has-text-white has-text-centered">{{ $t('contact') }}</h3>
        <h4 class="subtitle is-5 has-text-white has-text-centered">{{ $t('touch') }}</h4>
      </div>
      <br />
      <form id="contactform" method="POST" name="sentMessage">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="box">
              <div class="field">
                <label class="label" name="name">{{ $t('name') }}</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" name="name" placeholder="e.g John Doe" value />
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">{{ $t('email') }}</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="email"
                    name="_replyto"
                    placeholder="e.g johndoe@gmail.com"
                    value
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">{{ $t('phone') }}</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="phone"
                    name="phone"
                    placeholder="e.g 5551234567"
                    value
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-phone"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">{{ $t('message') }}</label>
                <div class="control">
                  <textarea class="textarea" name="message" placeholder="Your Message"></textarea>
                  <input type="text" name="_gotcha" style="display:none" />
                  <input type="hidden" name="_next" value="https://chilenosenmn.org/" />
                </div>
              </div>

              <div class="field is-grouped has-text-centered">
                <div class="control">
                  <button class="button is-danger is-rounded" type="submit" value="Send">
                    <span class="icon">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <span>{{ $t('submit') }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  mounted() {
    const contactform = document.getElementById('contactform');
    contactform.setAttribute(
      'action',
      '//formspree.io/' + 'chilenosenminnesota' + '@' + 'gmail' + '.' + 'com'
    );
  },
  data() {
    return { locale: 'es' };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  }
};
</script>

<i18n>
{
  "es": {
    "contact" : "Contáctenos",
    "touch" : "Estar en contacto",
    "name": "nombre",
    "email": "correo electrónico",
    "phone": "teléfono",
    "message": "mensaje",
    "submit": "enviar"
  },
 "en": {
    "contact" : "Contact Us",
    "touch" : "Get In Touch",
    "name": "name",
    "email": "email",
    "phone": "phone",
    "message": "message",
    "submit": "submit"
  }
}
</i18n>
