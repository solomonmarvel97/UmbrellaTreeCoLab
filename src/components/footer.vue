<template>
  <div>
    <div class="container px-5  mx-auto">
    <div class="row mt-large pb-5">
        <div class="col-md-8 col-6">
            <div class="row d-flex justify-content-between">
                <div class="d-flex flex-column pb-4">
                    <p class="title-btm">Information</p>
                    <p class="mb-0 text-muted">Contact us <span class="red-text">recruit@umbrellatreecolab.com</span></p>
                    <p class="mb-0 text-muted">Start learning</p>
                    <p class="mb-0 text-muted">Become a mentor</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-12">
            <form class="row justify-content-md-end pt-3"> <select name="lang" class="pr-5 pl-1 mt-2">
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="german">German</option>
                </select> </form>
        </div>
    </div>
    <div class="row justify-content-between mt-5 pt-4 footer-line">
        <div class="copy text-muted">UmbrellaTree CoLab 2020</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "foot",
}
</script>

<style scoped>
body {
    overflow-x: hidden
}

a {
    color: #fff
}

a:hover {
    color: #E0E0E0
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
    height: 400px;
    position: relative
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
    background-color: #E91E63;
    color: #fff
}

.box2 {
    background-color: #5C6BC0;
    color: #fff
}

.box3 {
    background-color: #42A5F5;
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
    width: 150px
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