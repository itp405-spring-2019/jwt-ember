import Controller from '@ember/controller';
import $ from 'jquery';
import environment from 'ember-jwt/config/environment';

const { API_ENDPOINT } = environment.APP;

export default Controller.extend({
  actions: {
    login(event) {
      event.preventDefault();

      $.ajax({
        url: `${API_ENDPOINT}/login`,
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
          email: this.email
        })
      }).then((response) => {
        localStorage.token = response.token;
        this.transitionToRoute('playlists');
      });
    }
  }
});
