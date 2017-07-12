var React = require("react");

var Search = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Search</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" required ref="about" placeholder="Subject"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" required ref="startYear" placeholder="Start Year"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" required ref="endYear" placeholder="End Year"/>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Search;
