using Database.Models;
using Database.Repository.Contracts;

namespace Database.Repository
{
    public class TagRepository : BaseRepository<TagModel>, ITagRepository
    {
        public TagRepository(Context context) : base(context)
        {
        }
    }
}