ui.UiFactory.layouts.cgGalleryLayout = {
  "type": "ui.FreeLayout",
  "orientation": "vertical",
  "preload": {
    "graphics": [
      {
        "name": $(function() {
          return $dataFields.database.system.menuBackground.name || 'bg-generic';
        })
      }, {
        "path": $(function() {
          return $dataFields.database.cgGalleryArray;
        }),
        "image": $(function() {
          var ref, ref1;
          return (ref = (ref1 = o.thumb) != null ? ref1.name : void 0) != null ? ref : o;
        })
      }, {
        "path": ["locked"],
        "image": $(function() {
          return o;
        })
      }
    ]
  },
  "frame": [0, 0, Graphics.width, Graphics.height],
  "controls": [
    {
      "id": "background",
      "type": "ui.Image",
      "imageHandling": 0,
      "image": function() {
        return $dataFields.database.system.menuBackground.name || 'bg-generic';
      },
      "frame": [0, 0, Graphics.width, Graphics.height]
    }, {
      "type": "ui.Button",
      "id": "backButton",
      "params": {
        "text": {
          "lcId": "B0FD4BF121D9E44E7589CDD35869F86F2227",
          "defaultText": "Back"
        },
        "action": {
          "name": "previousLayout"
        }
      },
      "frame": [Graphics.width - 170, Graphics.height - 65, 150, 45],
      "order": 1
    }, {
      "type": "ui.TitledWindow",
      "components": [
        {
          "type": "Component_HotspotBehavior",
          "params": {}
        }
      ],
      "id": "galleryWindow",
      "frame": [20, 0, 220, Graphics.height],
      "params": {
        "title": {
          "lcId": "F957AB5C572C3642839AAB12D429F0C1AA3C",
          "defaultText": "Chapters"
        }
      }
    }, {
      "type": "ui.DataScrollView",
      "frame": [20, 10 + 45, 220, Graphics.height - 45 - 10],
      "params": {
        "spacing": [10, 10],
        "columns": 1,
        "dataSource": $(function() {
          return $dataFields.chapters;
        }),
        "template": {
          "size": [220, 45],
          "descriptor": {
            "type": "ui.Text",
            "formulas": [
              $(function() {
                o.text = $dataFields.chapters[o.index].items.name;
                if (this.onInitialize && o.index === 0) {
                  return o.ui.selected = true;
                }
              })
            ],
            "font": {
              "name": "Times New Roman",
              "italic": true,
              "size": 45
            },
            "style": "selectableText",
            "selectable": true,
            "group": "chapters",
            "frame": [0, 0],
            "sizeToFit": true,
            "action": {
              "event": "onAccept",
              "name": "executeFormulas",
              "params": [
                $(function() {
                  return $scrollView.controls[1].behavior.dataSource = $dataFields.cgGalleryByChapter[$dataFields.chapters[o.index].uid];
                })
              ]
            }
          }
        }
      }
    }, {
      "type": "ui.TitledWindow",
      "components": [
        {
          "type": "Component_HotspotBehavior",
          "params": {}
        }
      ],
      "id": "galleryWindow",
      "frame": [260, 0, gs.UIConstants.CG_GALLERY_CONTENT_WIDTH, Graphics.height],
      "params": {
        "title": {
          "lcId": "A80D12A37EE45448BD2A2695D7C86820AB03",
          "defaultText": "Gallery"
        }
      }
    }, {
      "type": "ui.DataScrollView",
      "chainOrder": 3,
      "id": "scrollView",
      "frame": [260, 10 + 45, gs.UIConstants.CG_GALLERY_CONTENT_WIDTH, Graphics.height - 45 - 10],
      "params": {
        "spacing": [10, 10],
        "columns": Math.floor(gs.UIConstants.CG_GALLERY_CONTENT_WIDTH / 165),
        "dataSource": $(function() {
          var ref;
          return $dataFields.cgGalleryByChapter[(ref = $dataFields.chapters[0]) != null ? ref.uid : void 0];
        }),
        "template": {
          "size": [165, 124],
          "descriptor": {
            "type": "ui.FreeLayout",
            "frame": [0, 0],
            "sizeToFit": true,
            "group": "gallery",
            "style": "cgGalleryImage",
            "controls": [
              {
                "type": "ui.Frame",
                "style": "cgGalleryImageFrame",
                "frame": [0, 0, "100%", "100%"],
                "padding": [-16, -16, -16, -16],
                "zIndex": 10,
                "actions": [
                  {
                    "condition": {
                      "field": $(function() {
                        return o.parent.controls[1].image;
                      }),
                      "notEqualTo": $(function() {
                        return 'locked';
                      })
                    },
                    "name": "executeFormulas",
                    "params": [
                      $(function() {
                        return $tempFields.selectedImage = o.parent.data[0].graphic.name;
                      })
                    ]
                  }, {
                    "condition": {
                      "field": $(function() {
                        return o.parent.controls[1].image;
                      }),
                      "notEqualTo": $(function() {
                        return 'locked';
                      })
                    },
                    "name": "switchLayout",
                    "params": {
                      "name": "cgGalleryImageLayout",
                      "savePrevious": true
                    }
                  }
                ]
              }, {
                "type": "ui.Image",
                "frame": [0, 0, 165, 124],
                "fixedSize": true,
                "image": "locked",
                "formulas": [
                  $(function() {
                    if ($dataFields.globalData.cgGallery[o.parent.data[0].index].unlocked) {
                      return o.image = o.parent.data[0].thumb.name;
                    }
                  }), $(function() {
                    if (!$dataFields.globalData.cgGallery[o.parent.data[0].index].unlocked) {
                      return o.image = "locked";
                    }
                  })
                ]
              }
            ]
          }
        }
      }
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQXJCLEdBQXVDO0VBQ25DLE1BQUEsRUFBUSxlQUQyQjtFQUVuQyxhQUFBLEVBQWUsVUFGb0I7RUFHbkMsU0FBQSxFQUFXO0lBQ1AsVUFBQSxFQUFZO01BQ1I7UUFBRSxNQUFBLEVBQVEsQ0FBQSxDQUFFLFNBQUE7aUJBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQTNDLElBQW1EO1FBQXRELENBQUYsQ0FBVjtPQURRLEVBRVI7UUFBRSxNQUFBLEVBQVMsQ0FBQSxDQUFFLFNBQUE7aUJBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUF4QixDQUFGLENBQVg7UUFBc0QsT0FBQSxFQUFVLENBQUEsQ0FBRSxTQUFBO0FBQUcsY0FBQTt1RkFBZ0I7UUFBbkIsQ0FBRixDQUFoRTtPQUZRLEVBR1I7UUFBRSxNQUFBLEVBQVEsQ0FBQyxRQUFELENBQVY7UUFBc0IsT0FBQSxFQUFVLENBQUEsQ0FBRSxTQUFBO2lCQUFHO1FBQUgsQ0FBRixDQUFoQztPQUhRO0tBREw7R0FId0I7RUFVbkMsT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFRLENBQUMsS0FBaEIsRUFBdUIsUUFBUSxDQUFDLE1BQWhDLENBVjBCO0VBV25DLFVBQUEsRUFBWTtJQUNSO01BQ0ksSUFBQSxFQUFNLFlBRFY7TUFFSSxNQUFBLEVBQVEsVUFGWjtNQUdJLGVBQUEsRUFBaUIsQ0FIckI7TUFJSSxPQUFBLEVBQVMsU0FBQTtlQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUEzQyxJQUFtRDtNQUF0RCxDQUpiO01BS0ksT0FBQSxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFRLENBQUMsS0FBaEIsRUFBdUIsUUFBUSxDQUFDLE1BQWhDLENB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QVMsUUFKYjtnQkFLSSxVQUFBLEVBQVk7a0JBQ1AsQ0FBQSxDQUFFLFNBQUE7b0JBQ0MsSUFBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUssQ0FBQSxDQUFBLENBQUUsQ0FBQyxLQUFqQixDQUF1QixDQUFDLFFBQTVEOzZCQUNJLENBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsS0FBSyxDQUFDLEtBRHJDOztrQkFERCxDQUFGLENBRE8sRUFJUCxDQUFBLENBQUUsU0FBQTtvQkFDQyxJQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFVLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsS0FBakIsQ0FBdUIsQ0FBQyxRQUE3RDs2QkFDSSxDQUFDLENBQUMsS0FBRixHQUFVLFNBRGQ7O2tCQURELENBQUYsQ0FKTztpQkFMaEI7ZUFwQlE7YUFORjtXQUZOO1NBSk47T0FMZDtLQTdEUTtHQVh1QiIsInNvdXJjZXNDb250ZW50IjpbInVpLlVpRmFjdG9yeS5sYXlvdXRzLmNnR2FsbGVyeUxheW91dCA9IHtcbiAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgXCJvcmllbnRhdGlvblwiOiBcInZlcnRpY2FsXCIsXG4gICAgXCJwcmVsb2FkXCI6IHtcbiAgICAgICAgXCJncmFwaGljc1wiOiBbXG4gICAgICAgICAgICB7IFwibmFtZVwiOiAkIC0+ICRkYXRhRmllbGRzLmRhdGFiYXNlLnN5c3RlbS5tZW51QmFja2dyb3VuZC5uYW1lIG9yICdiZy1nZW5lcmljJyB9LFxuICAgICAgICAgICAgeyBcInBhdGhcIjogKCQgLT4gJGRhdGFGaWVsZHMuZGF0YWJhc2UuY2dHYWxsZXJ5QXJyYXkpLCBcImltYWdlXCI6ICgkIC0+IG8udGh1bWI/Lm5hbWUgPyBvKX0sXG4gICAgICAgICAgICB7IFwicGF0aFwiOiBbXCJsb2NrZWRcIl0sIFwiaW1hZ2VcIjogKCQgLT4gbyl9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIFwiZnJhbWVcIjogWzAsIDAsIEdyYXBoaWNzLndpZHRoLCBHcmFwaGljcy5oZWlnaHRdLFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuSW1hZ2VcIixcbiAgICAgICAgICAgIFwiaW1hZ2VIYW5kbGluZ1wiOiAwLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiAtPiAkZGF0YUZpZWxkcy5kYXRhYmFzZS5zeXN0ZW0ubWVudUJhY2tncm91bmQubmFtZSBvciAnYmctZ2VuZXJpYycsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwLCBHcmFwaGljcy53aWR0aCwgR3JhcGhpY3MuaGVpZ2h0XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5CdXR0b25cIixcbiAgICAgICAgICAgIFwiaWRcIjogXCJiYWNrQnV0dG9uXCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7IFwidGV4dFwiOiB7IFwibGNJZFwiOiBcIkIwRkQ0QkYxMjFEOUU0NEU3NTg5Q0REMzU4NjlGODZGMjIyN1wiLCBcImRlZmF1bHRUZXh0XCI6IFwiQmFja1wiIH0sIFwiYWN0aW9uXCI6IHsgXCJuYW1lXCI6IFwicHJldmlvdXNMYXlvdXRcIiB9IH0sXG4gICAgICAgICAgICBcImZyYW1lXCI6IFtHcmFwaGljcy53aWR0aCAtIDE3MCwgR3JhcGhpY3MuaGVpZ2h0IC0gNjUsIDE1MCwgNDVdLFxuICAgICAgICAgICAgXCJvcmRlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRpdGxlZFdpbmRvd1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IFt7IFwidHlwZVwiOiBcIkNvbXBvbmVudF9Ib3RzcG90QmVoYXZpb3JcIiwgXCJwYXJhbXNcIjoge30gfV0sXG4gICAgICAgICAgICBcImlkXCI6IFwiZ2FsbGVyeVdpbmRvd1wiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMjAsIDAsIDIyMCwgR3JhcGhpY3MuaGVpZ2h0XSxcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHsgXCJ0aXRsZVwiOiB7IFwibGNJZFwiOiBcIkY5NTdBQjVDNTcyQzM2NDI4MzlBQUIxMkQ0MjlGMEMxQUEzQ1wiLCBcImRlZmF1bHRUZXh0XCI6IFwiQ2hhcHRlcnNcIiB9IH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuRGF0YVNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzIwLCAxMCArIDQ1LCAyMjAsIEdyYXBoaWNzLmhlaWdodCAtIDQ1IC0gMTBdLFxuICAgICAgICAgICAgXCJwYXJhbXNcIjoge1xuICAgICAgICAgICAgICAgIFwic3BhY2luZ1wiOiBbMTAsIDEwXSxcbiAgICAgICAgICAgICAgICBcImNvbHVtbnNcIjogMSxcbiAgICAgICAgICAgICAgICBcImRhdGFTb3VyY2VcIjogJCAtPiAkZGF0YUZpZWxkcy5jaGFwdGVyc1xuICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogWzIyMCwgNDVdLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0b3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtdWxhc1wiOiBbJCAtPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnRleHQgPSAkZGF0YUZpZWxkcy5jaGFwdGVyc1tvLmluZGV4XS5pdGVtcy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgQG9uSW5pdGlhbGl6ZSBhbmQgby5pbmRleCA9PSAwIHRoZW4gby51aS5zZWxlY3RlZCA9IHllc1xuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7IFwibmFtZVwiOiBcIlRpbWVzIE5ldyBSb21hblwiLCBcIml0YWxpY1wiOiB0cnVlLCBcInNpemVcIjogNDUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJzZWxlY3RhYmxlVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwXCI6IFwiY2hhcHRlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudFwiOiBcIm9uQWNjZXB0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZXhlY3V0ZUZvcm11bGFzXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCAtPiAkc2Nyb2xsVmlldy5jb250cm9sc1sxXS5iZWhhdmlvci5kYXRhU291cmNlID0gJGRhdGFGaWVsZHMuY2dHYWxsZXJ5QnlDaGFwdGVyWyRkYXRhRmllbGRzLmNoYXB0ZXJzW28uaW5kZXhdLnVpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLlRpdGxlZFdpbmRvd1wiLFxuICAgICAgICAgICAgXCJjb21wb25lbnRzXCI6IFt7IFwidHlwZVwiOiBcIkNvbXBvbmVudF9Ib3RzcG90QmVoYXZpb3JcIiwgXCJwYXJhbXNcIjoge30gfV0sXG4gICAgICAgICAgICBcImlkXCI6IFwiZ2FsbGVyeVdpbmRvd1wiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMjYwLCAwLCBncy5VSUNvbnN0YW50cy5DR19HQUxMRVJZX0NPTlRFTlRfV0lEVEgsIEdyYXBoaWNzLmhlaWdodF0sXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7IFwidGl0bGVcIjogeyBcImxjSWRcIjogXCJBODBEMTJBMzdFRTQ1NDQ4QkQyQTI2OTVEN0M4NjgyMEFCMDNcIiwgXCJkZWZhdWx0VGV4dFwiOiBcIkdhbGxlcnlcIiB9IH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuRGF0YVNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgIFwiY2hhaW5PcmRlclwiOiAzLFxuICAgICAgICAgICAgXCJpZFwiOiBcInNjcm9sbFZpZXdcIixcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzI2MCwgMTAgKyA0NSwgZ3MuVUlDb25zdGFudHMuQ0dfR0FMTEVSWV9DT05URU5UX1dJRFRILCBHcmFwaGljcy5oZWlnaHQgLSA0NSAtIDEwXSxcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICBcInNwYWNpbmdcIjogWzEwLCAxMF0sXG4gICAgICAgICAgICAgICAgXCJjb2x1bW5zXCI6IE1hdGguZmxvb3IoZ3MuVUlDb25zdGFudHMuQ0dfR0FMTEVSWV9DT05URU5UX1dJRFRIIC8gMTY1KSxcbiAgICAgICAgICAgICAgICBcImRhdGFTb3VyY2VcIjogJCAtPiAkZGF0YUZpZWxkcy5jZ0dhbGxlcnlCeUNoYXB0ZXJbJGRhdGFGaWVsZHMuY2hhcHRlcnNbMF0/LnVpZF1cbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFsxNjUsIDEyNF0sXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZyYW1lXCI6IFswLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwXCI6IFwiZ2FsbGVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiBcImNnR2FsbGVyeUltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRyb2xzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLkZyYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjogXCJjZ0dhbGxlcnlJbWFnZUZyYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDAsIFwiMTAwJVwiLCBcIjEwMCVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZ1wiOiBbLTE2LCAtMTYsIC0xNiwgLTE2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ6SW5kZXhcIjogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZGl0aW9uXCI6IHsgXCJmaWVsZFwiOiAoJCAtPiBvLnBhcmVudC5jb250cm9sc1sxXS5pbWFnZSksIFwibm90RXF1YWxUb1wiOiAoJCAtPiAnbG9ja2VkJykgfSwgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImV4ZWN1dGVGb3JtdWxhc1wiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcmFtc1wiOiBbJCAtPiAkdGVtcEZpZWxkcy5zZWxlY3RlZEltYWdlID0gby5wYXJlbnQuZGF0YVswXS5ncmFwaGljLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmRpdGlvblwiOiB7IFwiZmllbGRcIjogKCQgLT4gby5wYXJlbnQuY29udHJvbHNbMV0uaW1hZ2UpLCBcIm5vdEVxdWFsVG9cIjogKCQgLT4gJ2xvY2tlZCcpIH0sICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzd2l0Y2hMYXlvdXRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJhbXNcIjogeyBcIm5hbWVcIjogXCJjZ0dhbGxlcnlJbWFnZUxheW91dFwiLCBcInNhdmVQcmV2aW91c1wiOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuSW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmcmFtZVwiOlswLCAwLCAxNjUsIDEyNF0gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpeGVkU2l6ZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IFwibG9ja2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybXVsYXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAkZGF0YUZpZWxkcy5nbG9iYWxEYXRhLmNnR2FsbGVyeVtvLnBhcmVudC5kYXRhWzBdLmluZGV4XS51bmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmltYWdlID0gby5wYXJlbnQuZGF0YVswXS50aHVtYi5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAhJGRhdGFGaWVsZHMuZ2xvYmFsRGF0YS5jZ0dhbGxlcnlbby5wYXJlbnQuZGF0YVswXS5pbmRleF0udW5sb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5pbWFnZSA9IFwibG9ja2VkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG59Il19
//# sourceURL=Layout_CGGallery_38.js