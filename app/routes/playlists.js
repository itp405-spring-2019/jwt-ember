import Route from '@ember/routing/route';
import $ from 'jquery';
import environment from 'ember-jwt/config/environment';

const { API_ENDPOINT } = environment.APP;

export default Route.extend({
  model() {
    return $.ajax({
      type: 'get',
      url: `${API_ENDPOINT}/api/playlists`,
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    });
  }
});
