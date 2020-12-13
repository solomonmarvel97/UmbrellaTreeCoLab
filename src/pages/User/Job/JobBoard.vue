<template>
<section class="timeline_area section_padding_130">
    <div class="container py-5">
        <div class="text-center">
            <h3> Available Jobs near you </h3>
        </div>
        <div class="row">
            <div class="col-12">
                <!-- Timeline Area-->
                <div class="apland-timeline-area">
                    <!-- Single Timeline Content-->
                    <div class="single-timeline-area">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4" v-for="job in jobs" :key="job.id">
                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                    <div class="timeline-icon">
                                        <img :src="job.image_url" width="30"/>
                                    </div>
                                    <div class="timeline-text">
                                        <h5>{{job.company_name}}</h5>
                                        <p class="job_title">{{job.title}}</p>
                                        <p class="job_location">{{job.address}}</p>
                                        <p class="job_description">{{job.description.slice(0,100) + "..."}}</p>
                                        <button @click="showAlert()" class="btn smallest_button">Easy Apply</button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</template>

<script>
export default {
    data() {
        return {
        jobs: [
        {
          id: '1',
          company_name: 'Twitter Nigeria', 
          title: 'Field Engineer', 
          location: 'Ikeja, Lagos Nigeria', 
          description: 'Machine Learning Engineering to manage the operation and maintenance of the Lagos and South-West sites, resulting in a 99% uptime or better', 
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZ2WwF5nK5VtPQyKGKAzHxKjoLF1-cPbTJQ&usqp=CAU", 
          action: 'profile'
        },
        {
          id: '2',
          company_name: 'JobberMan', 
          title: 'Software Developer', 
          location: 'Lagos Nigeria', 
          description: 'We are looking to hire a software developer who will be responsible for the design, Implementation/Development of Software Products and Solutions with a Software Development Team.', 
          image_url: "data:image/jpeg;base64,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", 
          action: 'profile'
        },
        {
          id: '3',
          company_name: 'Proxynet Communication', 
          title: 'Software Developer', 
          location: 'Lagos Nigeria', 
          description: 'The Wikimedia Foundation is looking for a senior product software engineer to join our team, reporting to product engineering management', 
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJ3uJa6_8kmKgmz3Z1YXwqd1zBR-OqxNK0A&usqp=CAU", 
          action: 'profile'
        },
        {
          id: '4',
          company_name: 'Rise Networks', 
          title: 'Research and Innovation Specialist', 
          location: 'Lagos Nigeria', 
          description: 'Rise Networks is a Data Science and Artificial Intelligence Powered Learning, Research and Work Readiness Center working to improve the skill set of young professionals for industry fitness in the evolving digital world of work. We’re leveraging deep technologies and disruptive innovation to build progressive Careers and a first-rate National Workforce capable of driving the digital transformation and economic growth for Companies, Communities and Countries.', 
          image_url: "https://i0.wp.com/risenetworks.org/wp-content/uploads/2019/03/fav.png?fit=512%2C512&ssl=1", 
          action: 'profile'
        },
        {
          id: '5',
          company_name: 'Kraks Media Limited', 
          title: 'Front End Developer', 
          location: 'Lagos Nigeria', 
          description: 'Kraks Media Limited – We’re a multifaceted entertainment and marketing platform that helps connect brands to new and existing markets through a versatile comedy channel, informative content and a strong online media presence.', 
          image_url: "https://media-exp1.licdn.com/dms/image/C4E0BAQFtHrl6tHhuqA/company-logo_200_200/0/1552815788285?e=2159024400&v=beta&t=eKT0fotT9KjHLoCwxkS4b3pjX2IaxatrBpVQv7SEbXk", 
          action: 'profile'
        },
        {
          id: '6',
          company_name: 'Facebook Nigeria', 
          title: 'Software Engineer', 
          location: 'Lagos Nigeria', 
          description: 'Are you a seasoned engineer, with a breadth of experience in building & shipping products? Do you have high standards when it comes to what good code is and what it takes to build high-quality, fault-tolerant software? Are you ready to own the codebase of a full-blown enterprise product, act as a technical lead for it and take it from stormy waters into more clear ones? If so, then this job is for you.', 
          image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png", 
          action: 'profile'
        },
         {
          id: '7',
          company_name: 'Cowrywise', 
          title: 'Software Engineer', 
          location: 'Lagos Nigeria', 
          description: 'Cowrywise is a digital wealth management platform democratising access to savings and investment products for the underserved but growing millenials in Africa. Joining us would mean being part of an interdisciplinary team dedicated to a lofty vision of building the next-generation wealth management platform for Africans.', 
          image_url: "https://technext.ng/wp-content/uploads/2019/11/IMG_20191103_071414.jpg", 
          action: 'profile'
        },
       
            ]
        }
    },
    methods : {
        showAlert(){
            swal({
                title: "Successfully Applied",
                text: "Thanks for using Umbrellatree CoLab",
                icon: "success",
});
        }
    }
};
</script>

<style scoped>

.job_location {
    color: black
}

.job_description {
    color: rgb(150, 150, 150)
}

.job_title {
    color: #ff7349;
    font-size: 13px
}

.single-timeline-area {
    position: relative;
    z-index: 1;

}
@media only screen and (max-width: 575px) {
    .single-timeline-area {
        padding-left: 100px;
    }
}
.single-timeline-area .timeline-date {
    position: absolute;
    width: 180px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-grid-row-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-right: 60px;
}
@media only screen and (max-width: 575px) {
    .single-timeline-area .timeline-date {
        width: 100px;
    }
}
.single-timeline-area .timeline-date::after {
    position: absolute;
    width: 3px;
    height: 100%;
    content: "";
    background-color: #ebebeb;
    top: 0;
    right: 30px;
    z-index: 1;
}
.single-timeline-area .timeline-date::before {
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #f1c40f;
    content: "";
    top: 50%;
    right: 26px;
    z-index: 5;
    margin-top: -5.5px;
}
.single-timeline-area .timeline-date p {
    margin-bottom: 0;
    color: #020710;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
}
.single-timeline-area .single-timeline-content {
    position: relative;
    z-index: 1;
    padding: 30px 30px 25px;
    border-radius: 6px;
    margin-bottom: 15px;
    margin-top: 15px;
    -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
    box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
    border: 1px solid #ebebeb;
}
@media only screen and (max-width: 575px) {
    .single-timeline-area .single-timeline-content {
        padding: 20px;
    }
}
.single-timeline-area .single-timeline-content .timeline-icon {
    max-width: 30px;
    max-height: 30px;
    background-color: #f1c40f;
    flex: 0 0 30px;
    max-width: 30px;
    border-radius: 50%;
    margin-right: 15px;
}

.single-timeline-area .single-timeline-content .timeline-icon i {
    color: #ffffff;
    line-height: 30px;
}
.single-timeline-area .single-timeline-content .timeline-text h6 {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
}
.single-timeline-area .single-timeline-content .timeline-text p {
    font-size: 13px;
    margin-bottom: 0;
}
.single-timeline-area .single-timeline-content:hover .timeline-icon,
.single-timeline-area .single-timeline-content:focus .timeline-icon {
    background-color: #020710;
}
.single-timeline-area .single-timeline-content:hover .timeline-text h6,
.single-timeline-area .single-timeline-content:focus .timeline-text h6 {
    color: #3f43fd;
}

</style>
