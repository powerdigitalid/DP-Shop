export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-danger">
            <i className="fas fa-info-circle" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Current Reservations</h4>
            </div>
            <div className="card-body">
              <span>50</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-primary">
            <i className="far fa-user" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Customers</h4>
            </div>
            <div className="card-body">
            <span>50</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-success">
            <i className="fas fa-box" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Products</h4>
            </div>
            <div className="card-body">
            <span>50</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="card card-statistic-1">
          <div className="card-icon bg-warning">
            <i className="fas fa-cubes" />
          </div>
          <div className="card-wrap">
            <div className="card-header">
              <h4>Treatments</h4>
            </div>
            <div className="card-body">
            <span>50</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}