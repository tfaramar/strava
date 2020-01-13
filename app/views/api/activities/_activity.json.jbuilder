
json.extract! activity, :id, :title, :sport, :distance, :elevation, :elapsed_time, :route_id, :personal_record, :start_time
    json.user do
        json.partial! "api/users/user", user: activity.user
    end
    json.kudos do
        activity.kudos.each do |kudo|
            json.partial! "api/kudos/kudo", kudo: kudo
        end
    end