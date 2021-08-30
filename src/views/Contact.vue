<template>
  <div class="container">
    <h2 class="text-center">Contac Us</h2>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 pb-5">
        <!--Form with header-->

        <form action="/contact-test" method="get">
          <div class="card border-primary rounded-0">
            <div class="card-header p-0">
              <div class="bg-primary text-white text-center py-2">
                <h3><i class="fa fa-envelope"></i> Email us at</h3>
                <p class="m-0">contactus@us.com</p>
              </div>
            </div>
            <div class="card-body p-3">
              <!--Body-->
              <div class="form-group">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-user text-primary"></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="fullname"
                    name="fullname"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-envelope text-primary"></i>
                    </div>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="youremailid@gmail.com"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i class="fa fa-comment text-primary"></i>
                    </div>
                  </div>
                  <textarea
                    class="form-control"
                    placeholder="Enter Your Message"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="text-center">
                
                <input
                class="btn btn-primary mt-2"
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </div>
        </form>
        <!--Form with header-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
<style>
</style>
