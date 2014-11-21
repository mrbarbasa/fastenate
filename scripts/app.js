$(function() {

  function viewBlogPosts(blogPosts) {
    var main = $(".main-content");
    main.html(""); // Clear everything already in it

    blogPosts.forEach(function(blogPost) {
      // Append fastening div to main-content section
      var fastening = $("<div>", {
        class: "fastening clearfix"
      });

      main.append(fastening);

      // Append image div to fastening
      var image = $("<div>", {
        class: "image",
        html: $("<img>", {
          src: blogPost.thumbnail,
          alt: "Fascinating image"
        })
      });

      fastening.append(image);

      // START: Append content div to fastening
      var content = $("<div>", {
        class: "content"
      });

      content.append($("<h3>", {
        class: "title",
        text: blogPost.title
      }));

      // START: Append elements to metadata div
      var dateCreatedObj = new Date(blogPost.created_at);
      var dateCreated = dateCreatedObj.getMonth() + "/" + dateCreatedObj.getDate() + "/" + dateCreatedObj.getFullYear();

      var metadata = $("<div>", {
        class: "metadata"
      });

      metadata.append($("<span>", {
        class: "fastenator",
        text: "by " + blogPost.author
      }))
      .append($("<div>", {
        class: "middot-div",
        html: $("<div>", {
          class: "middot"
        })
      }))
      .append($("<span>", {
        class: "time-elapsed",
        text: dateCreated
      }))
      .append($("<div>", {
        class: "middot-div mobile",
        html: $("<div>", {
          class: "middot"
        })
      }))
      .append($("<span>", {
        class: "views",
        text: blogPost.views + " views"
      }));

      content.append(metadata);
      // END: Append elements to metadata div

      content.append($("<p>", {
        class: "description",
        text: blogPost.body
      }));

      fastening.append(content);
      // END: Append content div to fastening
    });
  } // END: viewBlogPosts function

  function viewStudents(students) {
    var main = $(".main-content");
    main.html(""); // Clear everything already in it

    students.forEach(function(student) {
      // Append fastening div to main-content section
      var fastening = $("<div>", {
        class: "fastening clearfix"
      });

      main.append(fastening);

      // Append image div to fastening
      // var image = $("<div>", {
      //   class: "image",
      //   html: $("<img>", {
      //     src: "http://lorempixel.com/200/140/",
      //     alt: "Fascinating image"
      //   })
      // });

      // fastening.append(image);

      // START: Append content div to fastening
      var content = $("<div>", {
        class: "content"
      });

      content.append($("<h3>", {
        class: "title",
        text: student.first_name + " " + student.last_name
      }));

      // START: Append elements to metadata div
      var metadata = $("<div>", {
        class: "metadata"
      });

      metadata.append($("<span>", {
        class: "fastenator",
        text: student.year
      }))
      .append($("<div>", {
        class: "middot-div",
        html: $("<div>", {
          class: "middot"
        })
      }))
      .append($("<span>", {
        class: "time-elapsed",
        text: student.major
      }))
      .append($("<div>", {
        class: "middot-div mobile",
        html: $("<div>", {
          class: "middot"
        })
      }))
      .append($("<span>", {
        class: "views",
        text: "680,636 views"
      }));

      content.append(metadata);
      // END: Append elements to metadata div

      content.append($("<p>", {
        class: "description",
        text: "test"
      }));

      fastening.append(content);
      // END: Append content div to fastening
    });
  } // END: viewStudents function

  $("#blogs").on("click", function() {
    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/blog_posts",
      contentType: "application/json",
      data: {
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(blogPosts) {
        // console.log(blogPosts);
        viewBlogPosts(blogPosts);
      },
      error: function(request, errorType, errorMessage) {
        console.log("ERROR: " + errorMessage);
      }//,
      // timeout: 3000, // ms or 3 seconds
      // beforeSend: function() { // Runs before the Ajax request
      //   // Good place to add loading icon
      //   $('.conf').addClass('is-loading');
      // },
      // complete: function() { // Runs after both success and error
      //   // Remove loading icon
      //   $('.conf').removeClass('is-loading');
      // }
    });
  });

  $("#students").on("click", function() {
    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/students",
      contentType: "application/json",
      data: {
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(students) {
        console.log(students);
        viewStudents(students);
      },
      error: function(request, errorType, errorMessage) {
        console.log("ERROR: " + errorMessage);
      }
    });
  });

});
