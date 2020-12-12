<template>
  <div>
    <br>
    <div class="container px-5 mx-auto">
    <div class="row">
        <br>
    </div>
    <div class="row d-flex justify-content-between">
        <div class="box box1">
            <img src="@/assets/images/people/avatar1.png" width="50"/> 
            <img src="@/assets/images/people/avatar2.png" width="50"/>
            <img src="@/assets/images/people/avatar3.png" width="50"/>
            <hr style="color: #afafaf">
            <h3 class="pb-3">Training Programme</h3>
            <p class="sm-text">Join Other African women in changing the Narrative of Africa</p> 
            <a class="sm-text bottom text-link text-dark">Apply for this program</a> 
        </div>
        <div class="box box2">
            <h3 class="pb-3">Career Acceleration Programme</h3>
            <h6> - Internships </h6>
            <h6> - Job Matchmaking </h6>
            <h6> - Career Planning </h6>
            
            <a class="sm-text bottom text-link">Apply for this program</a> 

        </div>
        <div class="box box3">
            <h3 class="pb-3">Enterpreneurship Programme</h3>
            <h6 class="pb-3">Empowering women across Africa to be leaders and innovators through emerging technology.</h6>
            <a class="sm-text bottom text-link">Apply for this program </a> 

        </div>
    </div>
  
  </div>
  </div>
</template>

<script>
export default {
  name: "programsCard",
}
</script>
<style scoped>

.text-link {
  cursor: pointer;
}

.text-link:hover {
  cursor: pointer;
  text-decoration: underline;
  font-size: 15px;
}

a {
    color: #fff;
    cursor: pointer;
}

a:hover {
    cursor: pointer;
    color: #ffffff
}

.line {
    background-color: lightgrey;
    width: 50px;
    margin: 12px 7px 25px 7px;
    border-radius: 50px
}

.box {
    width: 30%;
    padding: 30px 30px 35px 30px;
    margin-bottom: 20px;
    height: 350px;
    position: relative;
    border-radius: 15px;    
}


img {
  border-radius: 50%;
  padding-right: 8px;
}


@media screen and (max-width: 992px) {
    .box {
        width: 48%
    }

    .btn-pink {
        width: 150px !important
    }
}

@media screen and (max-width: 768px) {
    .box {
        width: 80%
    }
}

.box1 {
    background-color: #ffffff;
    box-shadow: 10px 5px 50px rgba(0, 0, 0, 0.06);
    color: #07295f
}

.box2 {
    background-color: #303030;
    color: #fff
}

.box3 {
    background: url("../../../../assets/images/box3.png") no-repeat center center/cover;
    color: #fff
}

.fa-lightbulb-o {
    color: #E91E63;
    background-color: #fff;
    border-radius: 50%;
    font-size: 40px;
    padding: 20px 30px
}

.btn-pink {
    border: 1px solid #fff;
    border-radius: 25px;
    color: #fff;
    background-color: #E91E63;
    height: 50px;
    width: 180px
}

.btn-pink:hover {
    color: #E91E63;
    background-color: #fff
}

.btn-pink:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

.sm-text {
    font-size: 14px
}

.bottom {
    bottom: 20px;
    position: absolute;
    width: 100%;
}

.mt-large {
    margin-top: 120px
}

.title-btm {
    font-weight: bold
}

select {
    border: 1px solid lightgrey
}

.red-text {
    color: red;
    cursor: pointer
}

.red-text:hover {
    text-decoration: underline
}

.footer-line {
    border-top: 1px solid lightgrey
}
</style>