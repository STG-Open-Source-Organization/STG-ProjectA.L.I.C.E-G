ui.UiFactory.customTypes["ui.MessageBox"] = {
  "type": "ui.FreeLayout",
  "controls": [
    {
      "type": "ui.Panel",
      "color": [0, 0, 0, 255],
      "frame": [0, "100% - 220", "100%", 2],
      "zIndex": 5000
    }, {
      "type": "ui.Panel",
      "color": [0, 0, 0, 128],
      "frame": [0, "100% - 220", "100%", 220],
      "zIndex": 5000
    }, {
      "type": "ui.MessageBoxMenu",
      "params": {
        "messageBox": $(function() {
          return $messageBox;
        })
      },
      "order": 81000,
      "frame": [0, "100% - 270"]
    }, {
      "type": "ui.Text",
      "updateBehavior": "continuous",
      "text": "",
      "style": "messageBoxNameText",
      "formulas": [
        $(function() {
          return o.text = $dataFields.scene.currentCharacter.name;
        }), $(function() {
          if (this.onTextChange($dataFields.scene.currentCharacter.name)) {
            return o.font.color.setFromObject($dataFields.scene.currentCharacter.textColor || Color.WHITE);
          }
        })
      ],
      "zIndex": 5005,
      "sizeToFit": true,
      "frame": [148, "100% - 210", 128, 30]
    }
  ]
};

ui.UiFactory.customTypes["ui.CustomGameMessage"] = {
  "type": "ui.FreeLayout",
  "controls": [
    {
      "type": "ui.Message",
      "zIndex": 10000,
      "id": function() {
        return p.id + "_message";
      },
      "style": "customMessageText",
      "frame": [0, 0, "100%", "100%"]
    }, {
      "type": "ui.Image",
      "formulas": [
        $(function() {
          return o.dstRect.x = o.parent.controls[0].message.caretPosition.x;
        }), $(function() {
          return o.dstRect.y = o.parent.controls[0].message.caretPosition.y - 20;
        }), $(function() {
          return o.visible = o.parent.controls[0].visible && (o.parent.controls[0].message.isRunning || o.parent.controls[0].message.isWaiting);
        })
      ],
      "animations": [
        {
          "event": "onAlways",
          "flow": [
            {
              "type": "playAnimation",
              "repeat": false,
              "animationId": "40133382KC7B4A4C97S81F0E7D539A513261"
            }
          ]
        }
      ],
      "image": "message_caret",
      "zIndex": 10000,
      "frame": [0, 0, 0, 0]
    }
  ]
};

ui.UiFactory.customTypes["ui.GameMessage"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.Message",
      "zIndex": 10000,
      "id": function() {
        return p.id + "_message";
      },
      "frame": [0, 10, Graphics.width - 136 - 220, 200],
      "style": "advMessageText"
    }, {
      "type": "ui.Image",
      "formulas": [
        $(function() {
          return o.dstRect.x = o.parent.controls[0].message.caretPosition.x;
        }), $(function() {
          return o.dstRect.y = o.parent.controls[0].message.caretPosition.y - 10;
        }), $(function() {
          return o.visible = o.parent.controls[0].visible && (o.parent.controls[0].message.isRunning || o.parent.controls[0].message.isWaiting);
        })
      ],
      "animations": [
        {
          "event": "onAlways",
          "flow": [
            {
              "type": "playAnimation",
              "repeat": false,
              "animationId": "40133382KC7B4A4C97S81F0E7D539A513261"
            }
          ]
        }
      ],
      "image": "message_caret",
      "zIndex": 10000,
      "frame": [0, 0]
    }
  ]
};

ui.UiFactory.customTypes["ui.GameMessageNVL"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.Message",
      "zIndex": 10000,
      "id": function() {
        return p.id + "_message";
      },
      "style": "nvlMessageText",
      "frame": [Graphics.width / 100 * 12.5 + 8, 8, Graphics.width / 100 * 75 - 16, Graphics.height - 16]
    }
  ]
};

ui.UiFactory.customTypes["ui.MessageBoxNVL"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.MessageBoxMenu",
      "params": {
        "messageBox": $(function() {
          return $nvlMessageBox;
        })
      },
      "order": 81000,
      "frame": [0, Graphics.height - 270]
    }, {
      "type": "ui.Window",
      "params": {
        "backgroundOpacity": 128
      },
      "frame": [Graphics.width / 100 * 12.5, 0, Graphics.width / 100 * 75, Graphics.height],
      "zIndex": 4999
    }
  ]
};

ui.UiFactory.customTypes["ui.MessageMenu"] = {
  "type": "ui.FreeLayout",
  "sizeToFit": true,
  "controls": [
    {
      "type": "ui.MessageBoxMenu",
      "params": {
        "messageBox": $(function() {
          return $messageMenu;
        })
      },
      "order": 81000,
      "frame": [0, Graphics.height - 270]
    }
  ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBWSxDQUFBLGVBQUEsQ0FBekIsR0FBNEM7RUFDeEMsTUFBQSxFQUFRLGVBRGdDO0VBRXhDLFVBQUEsRUFBWTtJQUNSO01BQ0csTUFBQSxFQUFRLFVBRFg7TUFFRyxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxHQUFWLENBRlo7TUFHRyxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksWUFBSixFQUFrQixNQUFsQixFQUEwQixDQUExQixDQUhaO01BSUcsUUFBQSxFQUFVLElBSmI7S0FEUSxFQU9SO01BQ0csTUFBQSxFQUFRLFVBRFg7TUFFRyxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxHQUFWLENBRlo7TUFHRyxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksWUFBSixFQUFrQixNQUFsQixFQUEwQixHQUExQixDQUhaO01BSUcsUUFBQSxFQUFVLElBSmI7S0FQUSxFQWFSO01BQ0ksTUFBQSxFQUFRLG1CQURaO01BRUksUUFBQSxFQUFVO1FBQUUsWUFBQSxFQUFlLENBQUEsQ0FBRSxTQUFBO2lCQUFHO1FBQUgsQ0FBRixDQUFqQjtPQUZkO01BR0ksT0FBQSxFQUFTLEtBSGI7TUFJSSxPQUFBLEVBQVMsQ0FBQyxDQUFELEVBQUksWUFBSixDQUpiO0tBYlEsRUFtQlI7TUFDSSxNQUFBLEVBQVEsU0FEWjtNQUVJLGdCQUFBLEVBQWtCLFlBRnRCO01BR0ksTUFBQSxFQUFRLEVBSFo7TUFJSSxPQUFBLEVBQVMsb0JBSmI7TUFLSSxVQUFBLEVBQVk7UUFDUixDQUFBLENBQUUsU0FBQTtpQkFBRyxDQUFDLENBQUMsSUFBRixHQUFTLFdBQVcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFBL0MsQ0FBRixDQURRLEVBRVIsQ0FBQSxDQUFFLFNBQUE7VUFB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QyxTQUFTLENBQUMsV0FBWSxDQUFBLGdCQUFBLENBQXpCLEdBQTZDO0VBQ3pDLE1BQUEsRUFBUSxlQURpQztFQUV6QyxXQUFBLEVBQWEsSUFGNEI7RUFHekMsVUFBQSxFQUFZO0lBQ1I7TUFDSSxNQUFBLEVBQVEsbUJBRFo7TUFFSSxRQUFBLEVBQVU7UUFBRSxZQUFBLEVBQWUsQ0FBQSxDQUFFLFNBQUE7aUJBQUc7UUFBSCxDQUFGLENBQWpCO09BRmQ7TUFHSSxPQUFBLEVBQVMsS0FIYjtNQUlJLE9BQUEsRUFBUyxDQUFDLENBQUQsRUFBSSxRQUFRLENBQUMsTUFBVCxHQUFrQixHQUF0QixDQUpiO0tBRFE7R0FINkIiLCJzb3VyY2VzQ29udGVudCI6WyJ1aS5VaUZhY3RvcnkuY3VzdG9tVHlwZXNbXCJ1aS5NZXNzYWdlQm94XCJdID0ge1xuICAgIFwidHlwZVwiOiBcInVpLkZyZWVMYXlvdXRcIixcbiAgICBcImNvbnRyb2xzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5QYW5lbFwiLFxuICAgICAgICAgICBcImNvbG9yXCI6IFswLCAwLCAwLCAyNTVdLFxuICAgICAgICAgICBcImZyYW1lXCI6IFswLCBcIjEwMCUgLSAyMjBcIiwgXCIxMDAlXCIsIDJdLFxuICAgICAgICAgICBcInpJbmRleFwiOiA1MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuUGFuZWxcIixcbiAgICAgICAgICAgXCJjb2xvclwiOiBbMCwgMCwgMCwgMTI4XSxcbiAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgXCIxMDAlIC0gMjIwXCIsIFwiMTAwJVwiLCAyMjBdLFxuICAgICAgICAgICBcInpJbmRleFwiOiA1MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLk1lc3NhZ2VCb3hNZW51XCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7IFwibWVzc2FnZUJveFwiOiAoJCAtPiAkbWVzc2FnZUJveCkgfSxcbiAgICAgICAgICAgIFwib3JkZXJcIjogODEwMDAsXG4gICAgICAgICAgICBcImZyYW1lXCI6IFswLCBcIjEwMCUgLSAyNzBcIl1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuVGV4dFwiLFxuICAgICAgICAgICAgXCJ1cGRhdGVCZWhhdmlvclwiOiBcImNvbnRpbnVvdXNcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiLFxuICAgICAgICAgICAgXCJzdHlsZVwiOiBcIm1lc3NhZ2VCb3hOYW1lVGV4dFwiLCAgXG4gICAgICAgICAgICBcImZvcm11bGFzXCI6IFtcbiAgICAgICAgICAgICAgICAkIC0+IG8udGV4dCA9ICRkYXRhRmllbGRzLnNjZW5lLmN1cnJlbnRDaGFyYWN0ZXIubmFtZVxuICAgICAgICAgICAgICAgICQgLT4gaWYgQG9uVGV4dENoYW5nZSAkZGF0YUZpZWxkcy5zY2VuZS5jdXJyZW50Q2hhcmFjdGVyLm5hbWUgdGhlbiBvLmZvbnQuY29sb3Iuc2V0RnJvbU9iamVjdCAkZGF0YUZpZWxkcy5zY2VuZS5jdXJyZW50Q2hhcmFjdGVyLnRleHRDb2xvciBvciBDb2xvci5XSElURVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiekluZGV4XCI6IDUwMDUsXG4gICAgICAgICAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMTQ4LCBcIjEwMCUgLSAyMTBcIiwgMTI4LCAzMF1cbiAgICAgICAgfVxuICAgIF1cbn1cblxudWkuVWlGYWN0b3J5LmN1c3RvbVR5cGVzW1widWkuQ3VzdG9tR2FtZU1lc3NhZ2VcIl0gPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5NZXNzYWdlXCIsXG4gICAgICAgICAgICBcInpJbmRleFwiOiAxMDAwMCxcbiAgICAgICAgICAgIFwiaWRcIjogLT4gcC5pZCArIFwiX21lc3NhZ2VcIixcbiAgICAgICAgICAgIFwic3R5bGVcIjogXCJjdXN0b21NZXNzYWdlVGV4dFwiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgMCwgXCIxMDAlXCIsIFwiMTAwJVwiXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5JbWFnZVwiLFxuICAgICAgICAgICAgXCJmb3JtdWxhc1wiOiBbXG4gICAgICAgICAgICAgICAgJCAtPiBvLmRzdFJlY3QueCA9IG8ucGFyZW50LmNvbnRyb2xzWzBdLm1lc3NhZ2UuY2FyZXRQb3NpdGlvbi54XG4gICAgICAgICAgICAgICAgJCAtPiBvLmRzdFJlY3QueSA9IG8ucGFyZW50LmNvbnRyb2xzWzBdLm1lc3NhZ2UuY2FyZXRQb3NpdGlvbi55IC0gMjBcbiAgICAgICAgICAgICAgICAkIC0+IG8udmlzaWJsZSA9IG8ucGFyZW50LmNvbnRyb2xzWzBdLnZpc2libGUgYW5kIChvLnBhcmVudC5jb250cm9sc1swXS5tZXNzYWdlLmlzUnVubmluZyBvciBvLnBhcmVudC5jb250cm9sc1swXS5tZXNzYWdlLmlzV2FpdGluZylcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImFuaW1hdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJldmVudFwiOiBcIm9uQWx3YXlzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxvd1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFwidHlwZVwiOiBcInBsYXlBbmltYXRpb25cIiwgXCJyZXBlYXRcIjogZmFsc2UsIFwiYW5pbWF0aW9uSWRcIjogXCI0MDEzMzM4MktDN0I0QTRDOTdTODFGMEU3RDUzOUE1MTMyNjFcIiB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJpbWFnZVwiOiBcIm1lc3NhZ2VfY2FyZXRcIixcbiAgICAgICAgICAgIFwiekluZGV4XCI6IDEwMDAwLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgMCwgMCwgMF1cbiAgICAgICAgfVxuICAgIF1cbn1cblxudWkuVWlGYWN0b3J5LmN1c3RvbVR5cGVzW1widWkuR2FtZU1lc3NhZ2VcIl0gPSB7XG4gICAgXCJ0eXBlXCI6IFwidWkuRnJlZUxheW91dFwiLFxuICAgIFwic2l6ZVRvRml0XCI6IHRydWUsXG4gICAgXCJjb250cm9sc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVpLk1lc3NhZ2VcIixcbiAgICAgICAgICAgIFwiekluZGV4XCI6IDEwMDAwLFxuICAgICAgICAgICAgXCJpZFwiOiAtPiBwLmlkICsgXCJfbWVzc2FnZVwiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbMCwgMTAsIEdyYXBoaWNzLndpZHRoIC0gMTM2IC0gMjIwLCAyMDBdLFxuICAgICAgICAgICAgXCJzdHlsZVwiOiBcImFkdk1lc3NhZ2VUZXh0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuSW1hZ2VcIixcbiAgICAgICAgICAgIFwiZm9ybXVsYXNcIjogW1xuICAgICAgICAgICAgICAgICQgLT4gby5kc3RSZWN0LnggPSBvLnBhcmVudC5jb250cm9sc1swXS5tZXNzYWdlLmNhcmV0UG9zaXRpb24ueFxuICAgICAgICAgICAgICAgICQgLT4gby5kc3RSZWN0LnkgPSBvLnBhcmVudC5jb250cm9sc1swXS5tZXNzYWdlLmNhcmV0UG9zaXRpb24ueSAtIDEwXG4gICAgICAgICAgICAgICAgJCAtPiBvLnZpc2libGUgPSBvLnBhcmVudC5jb250cm9sc1swXS52aXNpYmxlIGFuZCAoby5wYXJlbnQuY29udHJvbHNbMF0ubWVzc2FnZS5pc1J1bm5pbmcgb3Igby5wYXJlbnQuY29udHJvbHNbMF0ubWVzc2FnZS5pc1dhaXRpbmcpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJhbmltYXRpb25zXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZXZlbnRcIjogXCJvbkFsd2F5c1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZsb3dcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBcInR5cGVcIjogXCJwbGF5QW5pbWF0aW9uXCIsIFwicmVwZWF0XCI6IGZhbHNlLCBcImFuaW1hdGlvbklkXCI6IFwiNDAxMzMzODJLQzdCNEE0Qzk3UzgxRjBFN0Q1MzlBNTEzMjYxXCIgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCJtZXNzYWdlX2NhcmV0XCIsXG4gICAgICAgICAgICBcInpJbmRleFwiOiAxMDAwMCxcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIDBdXG4gICAgICAgIH1cbiAgICBdXG59XG5cbnVpLlVpRmFjdG9yeS5jdXN0b21UeXBlc1tcInVpLkdhbWVNZXNzYWdlTlZMXCJdID0ge1xuICAgIFwidHlwZVwiOiBcInVpLkZyZWVMYXlvdXRcIixcbiAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5NZXNzYWdlXCIsXG4gICAgICAgICAgICBcInpJbmRleFwiOiAxMDAwMCxcbiAgICAgICAgICAgIFwiaWRcIjogLT4gcC5pZCArIFwiX21lc3NhZ2VcIixcbiAgICAgICAgICAgIFwic3R5bGVcIjogXCJudmxNZXNzYWdlVGV4dFwiLFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbR3JhcGhpY3Mud2lkdGggLyAxMDAgKiAxMi41ICsgOCwgOCwgR3JhcGhpY3Mud2lkdGggLyAxMDAgKiA3NSAtIDE2LCBHcmFwaGljcy5oZWlnaHQgLSAxNl1cbiAgICAgICAgfVxuICAgIF1cbn1cblxudWkuVWlGYWN0b3J5LmN1c3RvbVR5cGVzW1widWkuTWVzc2FnZUJveE5WTFwiXSA9IHtcbiAgICBcInR5cGVcIjogXCJ1aS5GcmVlTGF5b3V0XCIsXG4gICAgXCJzaXplVG9GaXRcIjogdHJ1ZSxcbiAgICBcImNvbnRyb2xzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuTWVzc2FnZUJveE1lbnVcIixcbiAgICAgICAgICAgIFwicGFyYW1zXCI6IHsgXCJtZXNzYWdlQm94XCI6ICgkIC0+ICRudmxNZXNzYWdlQm94KSB9LFxuICAgICAgICAgICAgXCJvcmRlclwiOiA4MTAwMCxcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIEdyYXBoaWNzLmhlaWdodCAtIDI3MF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidWkuV2luZG93XCIsXG4gICAgICAgICAgICBcInBhcmFtc1wiOiB7IFwiYmFja2dyb3VuZE9wYWNpdHlcIjogMTI4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJmcmFtZVwiOiBbR3JhcGhpY3Mud2lkdGggLyAxMDAgKiAxMi41LCAwLCBHcmFwaGljcy53aWR0aCAvIDEwMCAqIDc1LCBHcmFwaGljcy5oZWlnaHRdXG4gICAgICAgICAgICBcInpJbmRleFwiOiA0OTk5XG4gICAgICAgIH1cbiAgICBdXG59XG5cbnVpLlVpRmFjdG9yeS5jdXN0b21UeXBlc1tcInVpLk1lc3NhZ2VNZW51XCJdID0ge1xuICAgIFwidHlwZVwiOiBcInVpLkZyZWVMYXlvdXRcIixcbiAgICBcInNpemVUb0ZpdFwiOiB0cnVlLFxuICAgIFwiY29udHJvbHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1aS5NZXNzYWdlQm94TWVudVwiLFxuICAgICAgICAgICAgXCJwYXJhbXNcIjogeyBcIm1lc3NhZ2VCb3hcIjogKCQgLT4gJG1lc3NhZ2VNZW51KSB9LFxuICAgICAgICAgICAgXCJvcmRlclwiOiA4MTAwMCxcbiAgICAgICAgICAgIFwiZnJhbWVcIjogWzAsIEdyYXBoaWNzLmhlaWdodCAtIDI3MF1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuIl19
//# sourceURL=Template_MessageBox_2.js