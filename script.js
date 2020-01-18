<script src="https://js.radar.io/v1.1.0/radar.min.js" integrity="sha384-9gzMIZTQDnuwordlQUv+j9r2TDNLAaKXhSk+p/1jZV0tlnDQ8Bu6YVmTbLIG+dRg" crossorigin="anonymous"></script>

<script type="text/javascript">
  Radar.initialize(publishableKey);
  Radar.trackOnce(function(status, location, user, events) {
    if (status === Radar.STATUS.SUCCESS) {
      if (user.place.chain.slug === 'walmart') {
        // do something
      }
    }
  });
</script>