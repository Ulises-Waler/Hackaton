actor {
  public query func getSensorData(month : Text) : async [({
    data : [Nat];
    borderColor : Text;
    borderWidth : Nat;
  })] {
    switch (month) {
      case ("enero") {
        return [
          {
            data = [1, 2, 3, 4];
            borderColor = "rgba(75, 192, 192, 1)";
            borderWidth = 1;
          },
          {
            data = [2, 3, 4, 5];
            borderColor = "rgba(54, 162, 235, 1)";
            borderWidth = 1;
          },
          {
            data = [3, 4, 5, 6];
            borderColor = "rgba(255, 206, 86, 1)";
            borderWidth = 1;
          },
          {
            data = [4, 5, 6, 7];
            borderColor = "rgba(153, 102, 255, 1)";
            borderWidth = 1;
          },
        ];
      };
      case ("febrero") {
        return [
          {
            data = [4, 3, 2, 1];
            borderColor = "rgba(75, 192, 192, 1)";
            borderWidth = 1;
          },
          {
            data = [5, 4, 3, 2];
            borderColor = "rgba(54, 162, 235, 1)";
            borderWidth = 1;
          },
          {
            data = [6, 5, 4, 3];
            borderColor = "rgba(255, 206, 86, 1)";
            borderWidth = 1;
          },
          {
            data = [7, 6, 5, 4];
            borderColor = "rgba(153, 102, 255, 1)";
            borderWidth = 1;
          },
        ];
      };
      case (_) {
        return [{
          data = [0];
          borderColor = "";
          borderWidth = 1;
        }];
      };
    };
  };
};
