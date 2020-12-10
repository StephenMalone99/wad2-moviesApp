import React, { useEffect, useState } from "react";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCredits } from "../../api/tmdb-api";

export default ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCredits(movie.id).then(cast => {
      setCast(cast);
    });
}, 
  []);

  return(
    <div>
      <b><h4>Cast Members and Crew Members</h4></b>
      <div className= "row movies bg-info">
        {cast.map(member => {

  return(

    <div className="col-sm-3">
      <div className="card bg-white">
        <img
          className="card-img-tag center "
          src={
            member.profile_path
              ? `https://image.tmdb.org/t/p/w500/${member.profile_path}` : "./film-poster-placeholder.png"
          }
          alt={member.orginal_name}
        />
          <h4 className="card-title ">{member.original_name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {member.character}</span>
            </p>

          <p>
            <FontAwesomeIcon icon={["fas", "star"]} /> 
            <span> {member.season_number}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} /> 
            <span> {member.name}</span>
          </p>
        </div>
      </div>

);
}
        )
}
</div>
</div>
  )}